import React from 'react';
import { arrow } from '../assets';

const ExperienceCard = ({ job }) => (
  <div className='w-full md:w-full p-4 rounded-lg justify-between hover:bg-black hover:bg-opacity-20 group'>
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col'>
        <div className='flex flex-col flex-start'>
          <span className='text-white group-hover:text-crimson-red font-satoshi font-medium text-[20px] md:pt-0 md:pr-2'>
            {job.title} 
          </span>
          <div className='flex flex-row pb-3'>
            <span className='text-white font-semibold pr-2 group-hover:text-crimson-red'>
                {job.company}
            </span>
            <img src={arrow} className='hidden md:block w-[10px] transform group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200'/>
          </div>
        </div>
        <div className='text-white font-satoshi pb-3 opacity-60'>
          {job.duration}
        </div>
        <p className='w-full text-[16px] text-white font-satoshi pb-1 pt-1'>
          {job.description}
        </p>
        <div>
            <h2 className='text-white pb-3 font-medium pt-2'>
                Technologies Utlized
            </h2>
        </div>
        <ul className='flex flex-row items-center flex-wrap'>
          {job.skills.map((skill, idx) => (
            <li key={idx} className='pr-4 mb-2'>
              <div className='bg-white px-2 py-1 rounded-lg bg-opacity-10 text-white font-satoshi font-light border-white border-[1px] border-opacity-15'>
                {skill}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default ExperienceCard;