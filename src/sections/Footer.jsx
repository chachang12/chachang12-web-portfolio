import React from 'react'
import { CarsonLogo } from '../components'

const Footer = () => {
  return (
    <div className='flex flex-row w-full md:justify-between md:items-center'>
        <div className='flex flex-col md:w-[40%]'>
            <p className='font-satoshi text-white font-light text-start text-[16px] pb-2'>
                Designed using Figma and written in Visual Studio Code. Built using React.js and Tailwind CSS. Font is set in the {' '} <a href="https://www.fontshare.com/fonts/satoshi" target="_blank" rel="noopener noreferrer" className='font-medium hover:text-crimson-red'>Satoshi font family</a>. 
            </p>
            <a href="https://github.com/chachang12/chachang12-web-portfolio" target="_blank" rel="noopener noreferrer" className='text-white'>
              <p className='font-medium font-satoshi text-start pb-4 text-[16px] hover:text-crimson-red'>
                  Built by Carson Chang 2024
              </p>
            </a>
            <div className='md:hidden flex flex-end justify-center'>
              <a href='#name'>
                <CarsonLogo color={'white'} width={100} height={100} opacity={0.5}/>
              </a>
            </div>
        </div>
        <div className='hidden md:block'>
          <a href='#name'>
            <CarsonLogo color={'white'} width={100} height={100} />
          </a>
        </div>
    </div>
  )
}

export default Footer