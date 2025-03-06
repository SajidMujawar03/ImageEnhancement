import React, { useState, useRef } from "react";

const DragAndDrop = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [dragging, setDragging] = useState(false);
  const fileInputRef = useRef(null); // Reference for input file

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
      alert("Image uploaded successfully!"); // Mock success message
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred.");
    }
  };

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
          Click to Upload
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
