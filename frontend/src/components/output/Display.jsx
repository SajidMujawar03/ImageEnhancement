// import React from 'react'
// import svg from "./../../assets/react.svg"
// import large from "./../../assets/large.jpg"
// import aa from "./../../assets/aa.jpeg"
// import { useImageContext } from '../../context/imageContext'
// import ImageViewer from './ImageViewer'
// // import a from "../../../../backend/"


// const Display = () => {

//   const {imagePath,enhancedImagePath}=useImageContext()

//   return (
//     <>
    
//         <div className='flex flex-row gap-[100px] p-[100px]'>

//         <div style={{ display: "flex", width: "500px", height: "500px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
//   {/* <img 
//     src={`http://localhost:5000/${imagePath}`} 
//     alt="Description" 
//     style={{ 
//       maxWidth: "100%", 
//       maxHeight: "100%", 
//       objectFit: "contain", 
//       height:"100%",
     
//     }} 
//   /> */}

//   <ImageViewer image={`http://localhost:5000/${imagePath}`}/>
// </div>


// <div style={{ display: "flex", width: "500px", height: "500px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
//   {/* <img 
//     src={`http://localhost:5000/${enhancedImagePath}`}  
//     alt="Description" 
//     style={{ 
//       maxWidth: "100%", 
//       maxHeight: "100%", 
//       objectFit: "contain", 
//       height:"100%",
     
//     }} 
//   /> */}

// <ImageViewer image={`http://localhost:5000/${enhancedImagePath}`}/>
// </div>


//         </div>
    
    
//     </>
//   )
// }

// export default Display



import React, { useEffect, useRef } from 'react';
import { useImageContext } from '../../context/imageContext';
import ImageViewer from './ImageViewer';
import { useLocation } from 'react-router-dom';


const Display = () => {
  const { imagePath, enhancedImagePath ,setEnhancedImagePath,setImagePath} = useImageContext();



 

  return (
    <div className="flex flex-col justify-center items-center gap-10 p-10 md:p-20 bg-gray-100 min-h-screen">
      {/* Labels */}
      <div className="flex flex-row justify-center items-center gap-16">
       
       
      </div>

      {/* Image Containers */}

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-16">
        {/* Uploaded Image */}
        <div>
      <p className="text-lg font-semibold text-blue-700 mb-[25px] w-full text-center">Uploaded Image</p>

      <div className="w-[500px] h-[500px] flex justify-center items-center bg-white border border-blue-700 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <ImageViewer image={`http://localhost:5000/${imagePath}`} />
        </div>

      </div>
       

        {/* Enhanced Image */}
        <div>
        <p className="text-lg font-semibold text-blue-700 mb-[25px] w-full text-center">Enhanced Image</p>
        <div className="w-[500px] h-[500px] flex justify-center items-center bg-white border border-blue-700 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <ImageViewer image={`http://localhost:5000/${enhancedImagePath}`} />
        </div>

        </div>
        
      </div>
    </div>
  );
};

export default Display;
