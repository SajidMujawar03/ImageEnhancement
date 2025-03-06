import React from 'react'
import Router from '../Router/Router'
import Header from '../components/Header'
import Footer from '../components/Footer'


const Layout = () => {
  return (
    <>
    <Header/>
    <main className='min-h-screen '>
        <Router></Router>

    </main>
    <Footer/>
    
    </>
  )
}

export default Layout