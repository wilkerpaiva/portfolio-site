import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'



function Navbar() {


  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <header>
      <nav className='w-full h-[100px] bg-dark drop-shadow-md flex items-center justify-between px-8'>
        <h1 className=' text-white font-["Rubik"] text-3xl hover:cursor-pointer' > <a href="/">Wilker Paiva</a> </h1>
        <ul className='text-white font-["Rubik"] items-center hidden md:flex'>
          <li className='px-4 hover:text-gray cursor-pointer transition ease-linear text-sm' ><a href="/dev">DESENVOLVIMENTO FRONTEND</a></li>
          <li className='px-4 hover:text-gray cursor-pointer transition ease-linear text-sm' > <a href="/video">VÍDEO & MOTION</a></li>
          <li className='p-2 ml-4 bg-about-color rounded-lg hover:bg-about-color-hover cursor-pointer transition ease-linear text-sm' > <a href="/about">SOBRE MIM</a></li>
        </ul>

        <div onClick={handleClick} className='md:hidden z-50'>
          { !nav ? <FaBars className='cursor-pointer text-white' /> : <FaTimes className=' cursor-pointer text-white' />}
        </div>
        
        <ul className={!nav ? 'hidden' : ' fixed top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center z-40'}>
          <li className='text-white py-6 hover:text-gray cursor-pointer transition ease-linear'><a href="/dev">DESENVOLVIMENTO FRONTEND</a></li>
          <li className='text-white py-6 hover:text-gray cursor-pointer transition ease-linear'><a href="/video">VÍDEO & MOTION</a></li>
          <li className='text-white py-6 hover:text-gray cursor-pointer transition ease-linear'><a href="/about">SOBRE MIM</a></li>
        </ul>

    </nav>
    </header>
  )
}

export default Navbar