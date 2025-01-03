import React from 'react'
import Logo from './Logo'
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <>
        <header className='h-20 shadow-md'  >
            <div className=' h-full  container mx-auto flex items-center justify-between'>
                <div className='' >
                       <Logo w={10} h={50} />
                </div>
                <div>
                    <input type="text" placeholder='seach product here...' />
                    <div>
                    <FaSearch />
                    </div>
                </div>
                <div>
                    user icons and cards
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
