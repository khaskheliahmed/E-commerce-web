import React from 'react'
import Logo from './Logo'
import { ImSearch } from "react-icons/im";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
        <header className=' bg-white  h-20 shadow-md'  >
            <div className=' h-full  container mx-auto flex items-center justify-between'>
                <div className='' >
                       <Link to={"/"}  ><Logo/></Link>
                </div>

                {/* //Search_panel */}
                <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2  ' >
                    <input type="text" placeholder='seach product here...' className='w-full outline-none   ' />
                    <div className='text-lg min-w-[50Px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
                    <ImSearch />
                    </div>
                </div>
                {/* //user_panel */}
                <div className='flex item-cneter gap-7 '>
                <div className='text-3xl cursor-pointer '>
                <FaRegCircleUser />
                
                </div>
                <div className='text-3xl relative'>
                <span><IoCart /></span>
                <div className='bg-red-600 absolute -top-2 -right-2 text-white w-5 p-1 flex items-center justify-center h-5 rounded-full '>
                 <p className='text-xl'>0</p>
                 </div>
                </div>
                <Link to={"/login"} className='px-3 bg-red-600 py-1 rounded-full  text-white hover:bg-red-700'>login</Link>
                </div>

                

                


            </div>
        </header>
    </>
  )
}

export default Header
