import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Compounts/Header'
import Login from './Pages/Login'



const Layout = () => {
  return (
    <>
    
    <Header/>
    <Outlet/>
    
    
    </>
  )
}

export default Layout
