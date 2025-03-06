import React from 'react'
import svg from "./../../assets/react.svg"
import large from "./../../assets/large.jpg"
import aa from "./../../assets/aa.jpeg"
import { useImageContext } from '../../context/imageContext'
// import a from "../../../../backend/"


const Display = () => {

  const {imagePath,enhancedImagePath}=useImageContext()

  return (
    <>
    
        <div className='flex flex-row gap-[100px]'>

        <div style={{ display: "flex", width: "500px", height: "500px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
  <img 
    src={`http://localhost:5000/${imagePath}`} 
    alt="Description" 
    style={{ 
      maxWidth: "100%", 
      maxHeight: "100%", 
      objectFit: "contain", 
      height:"100%",
     
    }} 
  />
</div>


<div style={{ display: "flex", width: "500px", height: "500px", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
  <img 
    src={`http://localhost:5000/${enhancedImagePath}`}  
    alt="Description" 
    style={{ 
      maxWidth: "100%", 
      maxHeight: "100%", 
      objectFit: "contain", 
      height:"100%",
     
    }} 
  />
</div>


        </div>
    
    
    </>
  )
}

export default Display