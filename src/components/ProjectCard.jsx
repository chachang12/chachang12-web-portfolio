import React from 'react'
import arrow from '../assets/arrow.svg'

const ProjectCard = ({ project }) => (
    <div className='w-full md:w-full p-4 rounded-lg justify-between hover:bg-black hover:bg-opacity-20 group'>
      <div className='flex flex-col md:flex-row'>
        <img src={project.imgage} alt={project.name} className='md:w-[500px] h-auto object-cover md:pb-0 rounded-lg border-2 border-gray-300 border-opacity-50' />
        <div className='flex flex-col md:pl-8'>
          <div className='flex flex-row'>
            <span className='text-white group-hover:text-crimson-red font-satoshi font-medium text-[20px] pb-2 pt-4 md:pt-0 md:pr-2'>
              {project.name}
            </span>
            <img src={arrow} className='hidden md:block w-[10px] transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5 transition duration-200'/>
          </div>
          <p className='w-full text-white font-satoshi pb-4 text-[16px]'>
            {project.description}
          </p>
          <ul className='flex flex-row items-center flex-wrap'>
            {project.languages.map((language, idx) => (
              <li key={idx} className='pr-4 mb-2'>
                <div className='bg-white px-2 py-1 rounded-lg bg-opacity-10 text-white font-satoshi font-light border-white border-[1px] border-opacity-15'>
                  {language}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
);

export default ProjectCard