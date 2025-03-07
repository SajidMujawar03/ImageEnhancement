import React, { useState, useRef, useEffect } from "react";
import { useImageContext } from "../../context/imageContext";
import { useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";


const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    width:"25px",
    height:"25px"
  };

const Sharpning = () => {
  const {enhancedImagePath,imagePath,setImagePath,setEnhancedImagePath}= useImageContext();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null); // Reference for input file

  const navigate=useNavigate();

  // Handle file selection (click input)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Create preview URL
    }
  };

  // Remove selected image
  const removeImage = () => {
    setImage(null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Reset file input
    }
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  // Handle form submission (mock upload)
  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!image) {
      alert("Please select an image first.");
      setLoading(false)
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await fetch('http://localhost:5000/upload3', {
        method: 'POST',
        body: formData,
      });

      // console.log(response)

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      

      const result = await response.json();


      setEnhancedImagePath(result.enhanced_image_path);
      setImagePath(result.image_path)
    //   console.log(imagePath)

      navigate("/sharpning-result");

      // updateImagePaths(result.image_path,result.enhanced_image_path);
      console.log(imagePath+"       "+enhancedImagePath)
    } catch (error) {
      setError('Error uploading image: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (imagePath) {
      console.log('Updated imagePath:', imagePath);
    }
    if (enhancedImagePath) {
      console.log('Updated enhancedImagePath:', enhancedImagePath);
    }
  }, [imagePath, enhancedImagePath]); 
  let [color, setColor] = useState("#ffffff");


  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">AI Image Sharpner</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Upload an image to enhance its quality using AI. You can drag and drop an image or click to select one.
      </p>
  
      <form 
        onSubmit={handleUpload} 
        className="flex flex-col items-center gap-6 bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg"
      >
        {/* Hidden file input */}
        <input 
          type="file" 
          ref={fileInputRef} 
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ display: "none" }} 
        />
  
        {/* Drag and Drop Area */}
        <div
          className={`w-[400px] h-[300px] rounded-lg border-2 border-dashed flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
            dragging ? "border-blue-500 bg-blue-100" : "border-gray-400"
          }`}
          onClick={() => fileInputRef.current.click()} 
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-contain rounded-lg"
            />
          ) : (
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 1 1 8 0m0 0a4 4 0 1 1 8 0m-8 0a4 4 0 1 1-8 0m-2 0h14"></path>
              </svg>
              <p className="text-gray-600 font-semibold">Drag & Drop or Click to Upload</p>
              <p className="text-gray-500 text-sm">JPEG, PNG, and other common formats supported</p>
            </div>
          )}
        </div>
  
        {/* Upload Button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg w-full max-w-sm hover:bg-blue-600 transition-all duration-300 flex justify-center items-center"
          disabled={!image}
        >
          {loading ? (
            <FadeLoader color="#fff" loading={loading} height={10} width={3} radius={2} margin={2} />
          ) : (
            "Upload & Enhance"
          )}
        </button>
  
        {/* Remove Image Button */}
        {preview && (
          <button 
            type="button" 
            onClick={removeImage} 
            className="bg-red-500 text-white font-semibold px-6 py-3 rounded-lg w-full max-w-sm hover:bg-red-600 transition-all duration-300"
          >
            Remove Image
          </button>
        )}
      </form>
  
      {/* Additional Information */}
      <p className="text-gray-500 text-sm mt-6 text-center max-w-md">
        Your image will be processed using AI to improve resolution and clarity. This may take a few seconds.
      </p>
    </div>
  </>
  
  );
};

export default Sharpning;
