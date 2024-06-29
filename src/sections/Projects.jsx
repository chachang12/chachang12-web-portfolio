import React from 'react'
import Instances from '../components/Instances'
import { arrow } from '../assets'

const Projects = () => {
  return (
    <div className='flex flex-col'>
        <span className='hidden md:block text-white font-satoshi font-bold text-[20px] md:text-[40px] pb-2'>
            Projects
        </span>
        <div className='space-y-10'>
            <Instances />
        </div>
        
        {/* Add a link to the full project catalog */}
        {/* <a href='' className='flex flex-row group'>
            <span className='text-white font-satoshi font-bold pb-4 pr-2'>
                Full Project Catalog
            </span>
            <img src={arrow} className='w-[10px] transform group-hover:-translate-y-2 group-hover:translate-x-2 transition duration-200'/>
        </a> */}
    </div>
  )
}

export default Projects