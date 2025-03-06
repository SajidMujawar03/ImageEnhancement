import { NavLink } from "react-router-dom";

export default function ToolsProvided() {
    const tools = [
      {
        name: "Upscaling",
        description: "Enhance the resolution of your images without losing quality.",
        from: "", // Add source for 'before' image
        to: "", // Add source for 'after' image
        path:"/upscale"
      },
      {
        name: "Low Light Enhancement",
        description: "Brighten and enhance details in low-light images.",
        from: "",
        to: "",
        path:"/low_light_enhancement"
      },
      {
        name: "Sharpening",
        description: "Increase the clarity and sharpness of your images for better details.",
        from: "",
        to: "",
        path:"/sharpening"
      },
    ];
  
    return (
    <>
        <h2 className="text-3xl font-bold text-center mb-8">Tools Provided</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-300 mb-4">{tool.description}</p>
              <div className="flex items-center justify-between space-x-4 mb-4">
                <img
                  src={tool.from}
                  alt="Before"
                  className="w-24 h-24 object-cover rounded-lg opacity-80 transition duration-300 hover:opacity-100"
                />
                <span className="text-gray-400 text-lg">→</span>
                <img
                  src={tool.to}
                  alt="After"
                  className="w-24 h-24 object-cover rounded-lg opacity-80 transition duration-300 hover:opacity-100"
                />
              </div>
              <NavLink
              to={tool.path}
              >

                <button type="button" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-400">
                Try It
                </button>
               
              </NavLink>
            </div>
          ))}
        </div>
        </>
    );
  }