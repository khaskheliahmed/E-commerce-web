import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Pages/Home.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Forgotpassword from './Pages/Forgotpassword.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Layout/>,
    children :[
       {
        path : '/',
        element: <Home/>
       },
       {
        path: 'login',
         element:<Login/>
       },{
        path: 'signup',
        element:<Register/>
       },
       {
        path:'forgotpasswrod',
        element: <Forgotpassword/>
       }
    ]
  },
  
{

}
])

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router ={router} />
    
  
)
