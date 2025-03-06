import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import DragAndDrop from "../components/input/DragAndDrop";
import Display from "../components/output/Display";
import About from "../components/About";



const Router=()=>{
    return(

        <Routes>
            
           
            <Route path='/' element={<Home/>}/>
            <Route path='/upscale' element={<DragAndDrop/>}/>
            <Route path="/result" element={<Display/>}/>
            <Route path="/about" element={<About/>}/>

        

        </Routes>


    )
}


export default Router;
    
   