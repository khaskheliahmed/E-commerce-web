import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Compounts/Header'
import Footer from './Compounts/Footer'



const Layout = () => {
  return (
    <>
    
    <Header/>
    <main className='min-h-[calc(100vh-120px)] pt-16'>
          <Outlet/>
        </main>

      <Footer/>
    
    
    </>
  )
}

export default Layout
