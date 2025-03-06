import React from 'react'
import Router from '../Router/Router'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
    <Header/>
    <main className="bg-gray-100 min-h-screen flex justify-center items-center">
        <Router></Router>

    </main>
    <Footer/>
    
    </>
  )
}

export default Layout