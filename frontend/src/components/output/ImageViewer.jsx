import React, { useState } from 'react'
import svg from "./../../assets/react.svg"
import large from "./../../assets/large.jpg"
import aa from "./../../assets/aa.jpeg"
import { useImageContext } from '../../context/imageContext'
// import a from "../../../../backend/"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageViewer = ({ imagePath }) => {
  // const ImageViewer = () => {
  return (
    <div className="flex justify-center items-center p-4 w-[500px] h-[500px]  border relative">
      <TransformWrapper>
        {({ zoomIn, zoomOut }) => (
          <div className=" p-2">
            {/* Zoom Controls */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 z-50">
              <button 
                onClick={() => zoomIn()} 
                className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full text-lg"
              >
                +
              </button>
              <button 
                onClick={() => zoomOut()} 
                className="bg-black text-white w-8 h-8 flex justify-center items-center rounded-full text-lg"
              >
                −
              </button>
            </div>

            {/* Image Component */}
            <TransformComponent>
              <img
                src={large}
                alt="Enhanced"
                className="max-w-full max-h-[500px] object-contain h-[500px] w-[500px] p-2"
              />
            </TransformComponent>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ImageViewer;
