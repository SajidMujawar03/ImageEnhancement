import React from 'react'
import { NavLink } from 'react-router-dom'


const menuBar=[
    {
        title:"Home",
        path:"/"
    },
    
    {
        title:"Low-Light",
        path:"/lowlight"
    },
    {
        title:"Upscaling",
        path:"/upscale"
    },
    {
        title:"Sharpening",
        path:"/sharpning"
    },
    {
        title:"About",
        path:"/about"
    }
]

const Header = () => {
  return (
    <>
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-99">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold text-gray-800">IMAGE ENHANCEMENT TOOL</h1>
        
        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6">
            {menuBar.map((menu) => (
              <li key={menu.path}>
                <NavLink
                  to={menu.path}
                  className="px-4 py-2 text-lg font-semibold text-gray-700 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300"
                >
                  {menu.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  
  </>
  

  )
}

export default Header