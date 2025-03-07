import React from "react";
import { useImageContext } from "../../context/imageContext";

const LowLight = () => {
  const { imagePath, enhancedImagePath } = useImageContext();

  
  

  return (
    <>
    <div className="flex flex-col items-center pt-[100px] space-y-8 bg-gray-100 min-h-screen">
      {/* Title Section */}
      <h1 className="text-3xl font-bold text-gray-800">Low-Light Image Enhancement</h1>
      <p className="text-gray-600 text-lg max-w-2xl text-center">
        Improve the visibility of your images taken in low-light conditions using our AI-based enhancement.
      </p>

      {/* Image Comparison Section */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Original Image */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-700 mb-2">Original</span>
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex justify-center items-center overflow-hidden bg-white shadow-lg rounded-xl">
            <img
              src={`http://localhost:5000/${imagePath}`}
              alt="Original Image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Enhanced Image */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold text-gray-700 mb-2">Enhanced</span>
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] flex justify-center items-center overflow-hidden bg-white shadow-lg rounded-xl">
            <img
              src={`http://localhost:5000/${enhancedImagePath}`}
              alt="Enhanced Image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </div>

      
      
    </div>
    </>
  );
};

export default LowLight;
