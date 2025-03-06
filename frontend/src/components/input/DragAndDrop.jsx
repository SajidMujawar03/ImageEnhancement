import React, { useState, useRef, useEffect } from "react";
import { useImageContext } from "../../context/imageContext";
import { useNavigate } from "react-router-dom";

const DragAndDrop = () => {
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

    if (!image) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    try {
      const response = await fetch('http://localhost:5000/upload1', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      

      const result = await response.json();
      setEnhancedImagePath(result.enhanced_image_path);
      setImagePath(result.image_path)
      // console.log(imagePath)

      navigate("/result");

      // updateImagePaths(result.image_path,result.enhanced_image_path);
      // console.log(imagePath+"       "+enhancedImagePath)
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

  return (
    <>
      <form onSubmit={handleUpload} className="flex flex-col items-center gap-4">
        {/* Hidden file input */}
        <input 
          type="file" 
          ref={fileInputRef} // Assign ref
          accept="image/*" 
          onChange={handleImageChange} 
          style={{ display: "none" }} 
        />

        {/* Drag and Drop area */}
        <div
          className={`w-[300px] h-[200px] border-2 border-dashed flex items-center justify-center cursor-pointer ${
            dragging ? "border-blue-500 bg-blue-100" : "border-gray-400"
          }`}
          onClick={() => fileInputRef.current.click()} // Use ref to trigger file input
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-contain"
            />
          ) : (
            <p className="text-gray-600">Drag & Drop or Click to Upload</p>
          )}
        </div>

        {/* Upload Button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-[200px] hover:bg-blue-600 transition"
          disabled={!image} // Disable button if no image selected
        >
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>

        {/* Remove Image Button */}
        {preview && (
          <button 
            type="button" 
            onClick={removeImage} 
            className="bg-red-500 text-white px-4 py-2 rounded-md w-[200px] hover:bg-red-600 transition"
          >
            Remove Image
          </button>
        )}
      </form>
    </>
  );
};

export default DragAndDrop;
