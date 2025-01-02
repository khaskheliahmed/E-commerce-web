import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children :[
       {
        path : '/',
        element: <Home/>
       },
    ]
  },
  {

  },

])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router ={router} />
    
  
)
