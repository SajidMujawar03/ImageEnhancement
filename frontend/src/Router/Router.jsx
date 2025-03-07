import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import DragAndDrop from "../components/input/DragAndDrop";
import Display from "../components/output/Display";
import About from "../components/About";
import ImageViewer from "../components/output/ImageViewer";
import Upscale from "../components/input/Upscale";
import LowLight from "../components/output/LowLightOut";
import Sharpning from "../components/input/Sharpning";
import SharpningOut from "../components/output/SharpningOut";



const Router=()=>{
    return(

        <Routes>
            
           
            <Route path='/' element={<Home/>}/>

            <Route path='/lowlight' element={<DragAndDrop/>}/>
            <Route path='/upscale' element={<Upscale/>}/>
            <Route path='/sharpning' element={<Sharpning/>}/>
            <Route path="/upscale-result" element={<Display/>}/>
            <Route path="/sharpning-result" element={<SharpningOut/>}/>
            <Route path="/lowlight-result" element={<LowLight/>}/>

            <Route path="/about" element={<About/>}/>

        

        </Routes>


    )
}


export default Router;
    
   