import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const ImageContext = createContext();

// Custom hook to use the context
export const useImageContext = () => {
  return useContext(ImageContext);
};

// Provider component
export const ImageProvider = ({ children }) => {
  const [imagePath, setImagePath] = useState(null);
  const [enhancedImagePath, setEnhancedImagePath] = useState(null);


//   const updateImagePaths = (imagePath, enhancedImagePath) => {
//     setImagePath(imagePath);
//     setEnhancedImagePath(enhancedImagePath);
//   };

  

  return (
    <ImageContext.Provider value={{ imagePath, enhancedImagePath, setEnhancedImagePath,setImagePath }}>
      {children}
    </ImageContext.Provider>
  );
};
