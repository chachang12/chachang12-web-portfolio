import React from 'react'
import ExperienceCard from '../components/ExperienceCard'
import JobInstances from '../constants/JobInstances'
import arrow from '../assets/arrow.svg'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center'>
      <span className='hidden md:block text-white font-satoshi font-bold text-[20px] md:text-[40px] md:pb-2'>
        Experience
      </span>
      <div className='flex flex-wrap gap-4'>
        {JobInstances.map((job, index) => (
          <a href={job.link} key={index} target="_blank" rel="noopener noreferrer">
            <ExperienceCard job={job} />
          </a>
        ))}
      </div>
      <a href='https://www.dropbox.com/scl/fi/sihpyfkinkqhj0gi45bdw/CarsonChang2024.pdf?rlkey=d3k5prqfkhm2nrt26barww05z&st=7ytn9jaj&dl=0' target="_blank" rel="noopener noreferrer" className='group flex flex-row pt-4 md:w-[15%]'>
            <span className='text-white md:text-white md:hover:text-crimson-red font-satoshi font-bold pr-2'>
                View Resume
            </span>
            <img src={arrow} className='hidden md:block w-[10px] transform group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200'/>
        </a>
      
    </div>
  )
}

export default Experience