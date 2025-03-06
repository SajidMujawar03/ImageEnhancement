from flask import Flask, request, render_template, send_from_directory , jsonify
import os
from flask_cors import CORS  # Import CORS
from PIL import Image
import numpy as np
import tensorflow as tf
import keras
import cv2


class EDSRModel(tf.keras.Model):
    def train_step(self, data):
        # Unpack the data. Its structure depends on your model and
        # on what you pass to `fit()`.
        x, y = data

        with tf.GradientTape() as tape:
            y_pred = self(x, training=True)  # Forward pass
            # Compute the loss value
            # (the loss function is configured in `compile()`)
            loss = self.compiled_loss(y, y_pred, regularization_losses=self.losses)

        # Compute gradients
        trainable_vars = self.trainable_variables
        gradients = tape.gradient(loss, trainable_vars)
        # Update weights
        self.optimizer.apply_gradients(zip(gradients, trainable_vars))
        # Update metrics (includes the metric that tracks the loss)
        self.compiled_metrics.update_state(y, y_pred)
        # Return a dict mapping metric names to current value
        return {m.name: m.result() for m in self.metrics}

    def predict_step(self, x):
        # Adding dummy dimension using tf.expand_dims and converting to float32 using tf.cast
        x = tf.cast(tf.expand_dims(x, axis=0), tf.float32)
        # Passing low resolution image to model
        super_resolution_img = self(x, training=False)
        # Clips the tensor from min(0) to max(255)
        super_resolution_img = tf.clip_by_value(super_resolution_img, 0, 255)
        # Rounds the values of a tensor to the nearest integer
        super_resolution_img = tf.round(super_resolution_img)
        # Removes dimensions of size 1 from the shape of a tensor and converting to uint8
        super_resolution_img = tf.squeeze(
            tf.cast(super_resolution_img, tf.uint8), axis=0
        )
        return super_resolution_img


# Residual Block
def ResBlock(inputs):
    x = layers.Conv2D(64, 3, padding="same", activation="relu")(inputs)
    x = layers.Conv2D(64, 3, padding="same")(x)
    x = layers.Add()([inputs, x])
    return x


# Upsampling Block
def Upsampling(inputs, factor=2, **kwargs):
    x = layers.Conv2D(64 * (factor ** 2), 3, padding="same", **kwargs)(inputs)
    x = tf.nn.depth_to_space(x, block_size=factor)
    x = layers.Conv2D(64 * (factor ** 2), 3, padding="same", **kwargs)(x)
    x = tf.nn.depth_to_space(x, block_size=factor)
    return x


def make_model(num_filters, num_of_residual_blocks):
    # Flexible Inputs to input_layer
    input_layer = layers.Input(shape=(None, None, 3))
    # Scaling Pixel Values
    x = layers.Rescaling(scale=1.0 / 255)(input_layer)
    x = x_new = layers.Conv2D(num_filters, 3, padding="same")(x)

    # 16 residual blocks
    for _ in range(num_of_residual_blocks):
        x_new = ResBlock(x_new)

    x_new = layers.Conv2D(num_filters, 3, padding="same")(x_new)
    x = layers.Add()([x, x_new])

    x = Upsampling(x)
    x = layers.Conv2D(3, 3, padding="same")(x)

    output_layer = layers.Rescaling(scale=255)(x)
    return EDSRModel(input_layer, output_layer)


# Define PSNR metric

def PSNR(super_resolution, high_resolution):
    """Compute the peak signal-to-noise ratio, measures quality of image."""
    # Max value of pixel is 255
    psnr_value = tf.image.psnr(high_resolution, super_resolution, max_val=255)[0]
    return psnr_value

custom_objects = {"EDSRModel":EDSRModel}

with keras.utils.custom_object_scope(custom_objects):
    model = keras.models.load_model("./model.h5", custom_objects={'PSNR':PSNR})

app = Flask(__name__)

CORS(app)

# Ensure directories exist
os.makedirs('uploads', exist_ok=True)
os.makedirs('static', exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload1')
def upload1():
    return render_template('upload1.html')

@app.route('/aboutus')
def about():
    return render_template('aboutUs.html')

@app.route('/login')
def login():
    return render_template('login.html')


def enhance_image(img): 
    lowres = tf.convert_to_tensor(img, dtype=tf.uint8)
    output = model.predict(lowres) 
    
    
    # Convert the processed numpy array to a PIL Image
    enhanced_image = Image.fromarray(output)
    
    output_image_path = os.path.join('static', 'enhanced_image.png')
    

    if not os.path.exists('static'):
        os.makedirs('static')
    
   
    enhanced_image.save(output_image_path)
    

    return output_image_path


@app.route('/upload1', methods=['POST'])
def upload_image1():
    if 'file' not in request.files:
        return render_template('index.html', error="No file part")
    
    original_image = request.files['file']
    
    if original_image.filename == '':
        return render_template('index.html', error="No selected file")
    
    image = Image.open(original_image)

    
    image_path = os.path.join('static', 'original_image.png')
    image.save(image_path)
    
    enhanced_image_path = enhance_image(image)
    
    return jsonify({
        'image_path': image_path,
        'enhanced_image_path': enhanced_image_path
    })


@app.route('/upload2', methods=['POST'])
def upload_image2():
    if 'file' not in request.files:
        return render_template('upload2.html', error="No file part")
    
    original_image = request.files['file']
    
    if original_image.filename == '':
        return render_template('index.html', error="No selected file")
    
    image = Image.open(original_image)

    image_path = os.path.join('static', 'original_image.png')
    image.save(image_path)
    

    enhanced_image_path = enhance_image(image)
    
    return render_template('result2.html', enhanced_image_path=enhanced_image_path, image_path=image_path)

if __name__ == "__main__":
    app.run(debug=True)
