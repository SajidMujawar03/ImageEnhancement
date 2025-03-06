import React from 'react'
import ToolsProvided from './ToolsProvided'



const Home = () => {
  return (
    <>

    <main className='flex justify-center items-center flex-col w-full bg-gray-100 min-h-screen  pt-[50px]'>
    <section className="flex flex-col items-center text-center pt-8 bg-gray-100 min-h-[60vh] w-[100%] justify-center">
      {/* Title */}
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to the Image Enhancement Tool</h2>
      <p className="text-gray-600 max-w-2xl text-2xl">
        Upload your image and let AI enhance its quality! See the transformation from low resolution to high definition.
      </p>
  
      {/* Image Comparison */}
      <div className="flex items-center justify-center gap-6 mt-6 bg-white p-6 rounded-lg shadow-lg">
        {/* Before Image */}
        <div className="text-center">
          <p className="text-gray-600 mb-2 font-medium">Before</p>
          <img 
            src="before-image-url.jpg" 
            alt="Before Enhancement" 
            className="w-60 h-40 object-cover rounded-lg border border-gray-300 shadow"
          />
        </div>
  
        {/* Arrow Icon */}
        <div className='flex'>
          
          <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
  
        {/* After Image */}
        <div className="text-center">
          <p className="text-gray-600 mb-2 font-medium">After</p>
          <img 
            src="after-image-url.jpg" 
            alt="After Enhancement" 
            className="w-60 h-40 object-cover rounded-lg border border-gray-300 shadow"
          />
        </div>
      </div>
    </section>

    <section className="bg-gray-900 text-white py-12 w-[100%] h-[500px]">

      
    <ToolsProvided/>
    </section>
    </main>


  </>
  
  )
}

export default Home