import React from 'react'

const NavBar = () => {
  return (
    <div className='flex flex-row justify-center text-white font-satoshi space-x-8 text-[24px] py-4 font-light'>
        <a href="#about">
            <h1 className='hover:text-crimson-red'>
              About
            </h1>
            
        </a>
        <a href="#project">
          <h1 className='hover:text-crimson-red'>
            Projects
          </h1>
        </a>
        <a href="#experience">
          <h1 className='hover:text-crimson-red'>
            Experience
          </h1>
        </a>
        {/* <a href="#contact">
          <h1 className='hover:text-crimson-red'>
            Contact
          </h1>
        </a> */}
    </div>
  )
}

export default NavBar