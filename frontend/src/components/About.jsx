import { useState } from "react";
import { motion } from "framer-motion";
import { EyeIcon } from "@heroicons/react/outline";
import one from "../assets/one.jpg";
import one1 from "../assets/one1.png";
import two from "../assets/two.png"
import two1 from "../assets/two2.png"
import three from "../assets/three.jpg"
import three1 from "../assets/three1.png"


const About = () => {
  const [hoveredTool, setHoveredTool] = useState(null);


  // Sample images (Replace with actual image paths)
  const toolImages = {
    upscale: {
      before:three,
      after: three1,
    },
    lowlight: {
      before: one,
      after: one1,
    },
    sharpen: {
      before: two,
      after: two1,
    },
  };

  return (
    <section className="max-w-5xl mx-auto p-[100px] text-center">

      <div className="min-h-[700px]">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Our Image Enhancement Tools
      </motion.h2>
      <motion.p
        className="text-gray-600 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        Explore our AI-powered tools to enhance images effortlessly.
      </motion.p>


      <div className="grid md:grid-cols-3 gap-6">

        <motion.div
          className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHoveredTool("upscale")}
          onMouseLeave={() => setHoveredTool(null)}
        >
          <h3 className="text-xl font-semibold mb-2">Image Upscaling</h3>
          <p className="text-gray-500">
            Increase resolution while preserving details.
          </p>
        </motion.div>

        <motion.div
          className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHoveredTool("lowlight")}
          onMouseLeave={() => setHoveredTool(null)}
        >
          <h3 className="text-xl font-semibold mb-2">Low-Light Enhancement</h3>
          <p className="text-gray-500">
            Brighten dark images and recover lost details.
          </p>
        </motion.div>

   
        <motion.div
          className="p-4 bg-white rounded-lg shadow-md cursor-pointer"
          whileHover={{ scale: 1.05 }}
          onMouseEnter={() => setHoveredTool("sharpen")}
          onMouseLeave={() => setHoveredTool(null)}
        >
          <h3 className="text-xl font-semibold mb-2">Image Sharpening</h3>
          <p className="text-gray-500">
            Enhance edges and fine details for crisp visuals.
          </p>
        </motion.div>
      </div>


      <p
  className={`${
    !hoveredTool ? "flex" : "hidden"
  } h-[450px] flex-col justify-center items-center text-gray-500 text-lg font-semibold`}
>
  <EyeIcon className="w-10 h-10 text-gray-400 mb-2 animate-ping" /> 
  HOVER ABOVE
</p>

   
      {hoveredTool && toolImages[hoveredTool] && (
        <motion.div
          className="mt-8 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h4 className="text-lg font-semibold mb-3">Preview</h4>
          <div className="flex w-[600px] h-[300px] gap-2">
  <img
    src={toolImages[hoveredTool].before}
    alt="Before"
    className="w-[300px] h-[300px] rounded-lg shadow-md"
    style={{objectFit:"content"}}
  />
  <img
    src={toolImages[hoveredTool].after}
    alt="After"
    className="w-[300px] h-[300px] rounded-lg shadow-md"
    style={{objectFit:"content"}}
  />
</div>


          <p className="text-gray-500 mt-2">Hover over a tool to see the transformation.</p>
        </motion.div>
      )}
      </div>



      {/* Use Cases */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Photographers & Designers</h3>
            <p className="text-gray-600">Enhance image clarity, sharpen blurry photos, and improve lighting.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">E-commerce & Marketing</h3>
            <p className="text-gray-600">Upscale product images for high-quality listings and better engagement.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Security & Surveillance</h3>
            <p className="text-gray-600">Improve low-light security footage for better visibility.</p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">1. Choose an Enhancement</h3>
            <p className="text-gray-600">Select from Upscaling, Low-Light Enhancement, or Sharpening.</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">2. Upload Your Image</h3>
            <p className="text-gray-600">Select an image and upload it to our platform.</p>
          </div>
          
          <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">3. Get Your Enhanced Image</h3>
            <p className="text-gray-600">Download your improved image instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
