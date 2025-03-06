import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import DragAndDrop from "../components/input/DragAndDrop";
import Display from "../components/output/Display";
import About from "../components/About";
import ImageViewer from "../components/output/ImageViewer";
import Upscale from "../components/input/Upscale";
import LowLight from "../components/output/LowLightOut";



const Router=()=>{
    return(

        <Routes>
            
           
            <Route path='/' element={<Home/>}/>

            <Route path='/lowlight' element={<DragAndDrop/>}/>
            <Route path='/upscale' element={<Upscale/>}/>
            <Route path="/upscale-result" element={<Display/>}/>
            <Route path="/lowlight-result" element={<LowLight/>}/>

            <Route path="/about" element={<About/>}/>

        

        </Routes>


    )
}


export default Router;
    
   