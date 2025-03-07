# Image Enhancement Web Application

## Overview

This project is an image enhancement web application that allows users to upload an image, apply enhancements (such as upscaling, low-light enhancement, and sharpening), and download the processed image. The backend uses deep learning models for image processing, while the frontend provides an interactive user interface.

## Project Structure

```
project-root/
│── backend/
│   │── static/
│   │   │── enhanced_image.png  # Processed image output
│   │   │── original_image.png  # Original uploaded image
│   │── .gitignore
│   │── app.py                  # Flask backend
│   │── model.h5                 # Deep learning model 1
│   │── model2.h5                # Deep learning model 2
│   │── setup.txt                # Dependencies for backend
│
│── frontend/
│   │── public/                   # Static assets
│   │── src/                      # React source code
│   │── .gitignore
│   │── README.md
│   │── eslint.config.js          # Linting configuration
│   │── index.html                # Entry point for frontend
```

## Technologies Used

### Backend:

- Python (Flask)
- TensorFlow/Keras (for image processing models)
- OpenCV

### Frontend:

- React.js
- Tailwind CSS
- JavaScript

## Setup Instructions

### Backend:

1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   pip install -r setup.txt
   ```
3. Run the Flask server:
   ```sh
   python app.py
   ```

### Frontend:

1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Usage

1. Upload an image via the frontend.
2. The image is sent to the backend for processing.
3. The enhanced image is generated and stored in `backend/static/enhanced_image.png`.
4. The frontend displays the processed image for download.

## Future Improvements

- Add more image enhancement models.
- Implement real-time preview of enhancements.
- Deploy the application for public use.

## Contributors

- **Tony** (Developer)
- Team Members (if applicable)

## License

This project is licensed under the MIT License
