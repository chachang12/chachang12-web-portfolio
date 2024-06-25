import React from 'react'
import Instances from '../components/Instances'
import { arrow } from '../assets'

const Projects = () => {
  return (
    <div id='project' className='flex flex-col py-40 items-center'>
        <div className='pb-10'>
            <Instances />
        </div>
        
        <a href='' className='flex flex-row group'>
            <span className='text-white font-satoshi font-bold pb-4 pr-2'>
                Full Project Catalog
            </span>
            <img src={arrow} className='w-[10px] transform group-hover:-translate-y-2 group-hover:translate-x-2 transition duration-200'/>
        </a>
    </div>
  )
}

export default Projects