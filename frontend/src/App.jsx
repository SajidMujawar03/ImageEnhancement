
import { useLocation } from 'react-router-dom';
import './App.css'

import Layout from './Layout/Layout'
import { useEffect, useRef } from 'react';
import { useImageContext } from './context/imageContext';




function App() {
  const {setEnhancedImagePath,setImagePath}=useImageContext();

  const location = useLocation();
  const prevPath = useRef(location.pathname); // Store previous route


  useEffect(() => {
    // If leaving the `/result` route, reset image paths
    if (prevPath.current.includes("result") && !location.pathname.includes("result")) {
      setImagePath(null);
      setEnhancedImagePath(null);
    }
    prevPath.current = location.pathname; // Update previous path
    console.log(location.pathname)
  }, [location.pathname]);

  return (
    <>
     {/* <DragAndDrop/> */}
     {/* <Display/> */}

     <Layout/>
  {/* <ImageViewer/> */}
     
    </>
  )
}

export default App
