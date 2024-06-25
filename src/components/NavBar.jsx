import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-center text-white font-satoshi space-x-8 text-[24px] py-4 '>
        <a href="#about">
            About
        </a>
        <a href="#project">
            Projects
        </a>
        <a href="#contact">
            Contact
        </a>
    </div>
  )
}

export default NavBar