import { useState } from "react";
import { NavLink } from "react-router-dom";
import one from "../assets/one.jpg";
import one1 from "../assets/one1.png";
import two from "../assets/two.png"
import two1 from "../assets/two2.png"
import three from "../assets/three.jpg"
import three1 from "../assets/three1.png"

export default function ToolsProvided() {
  const tools = [
    {
      name: "Upscaling",
      description: "Enhance the resolution of your images without losing quality.",
      images: [three, three1],
      path: "/upscale",
    },
    {
      name: "Low Light Enhancement",
      description: "Brighten and enhance details in low-light images.",
      images: [one, one1],
      path: "/lowlight",
    },
    {
      name: "Sharpening",
      description: "Increase the clarity and sharpness of your images for better details.",
      images: [two, two1],
      path: "/sharpning",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % tools.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center mb-8">Tools Provided</h2>
      <div className="relative max-w-[500px] mx-auto overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {tools.map((tool, index) => (
            <div key={index} className="min-w-[500px] px-4">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600"
        >
          &#10095;
        </button>
      </div>
    </>
  );
}

function ToolCard({ tool }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-semibold mb-2 text-white">{tool.name}</h3>
      <p className="text-sm text-gray-300 mb-4">{tool.description}</p>
      <div className="flex items-center justify-center">
        {tool.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={tool.name}
            className="w-40 h-40 object-cover rounded-lg opacity-80 transition duration-300 hover:opacity-100 mx-2"
          />
        ))}
      </div>
      <NavLink to={tool.path}>
        <button
          type="button"
          className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
        >
          Try It
        </button>
      </NavLink>
    </div>
  );
}