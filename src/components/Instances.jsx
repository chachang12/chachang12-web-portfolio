import React from 'react';
import Project from '../models/Project';
import ProjectInstances from '../models/ProjectInstances';
import { arrow } from '../assets';

const Instances = () => {
  return (
    <div className='flex justify-center'>
        <div>
            {ProjectInstances.map((project, index) => (
                <a href={project.link} target="_blank" rel="noopener noreferrer" key={index}>
                    <div className='group w-[1000px] m-4 rounded-lg p-4 hover:bg-gray-200 hover:bg-opacity-20'>
                        <div className='flex flex-row'>
                            <img src={project.imgage} alt={project.name} className='w-[500px] rounded-lg border-2 border-gray-300 border-opacity-50'/>
                            <div className='flex flex-col pl-8'>
                                <div className='flex flex-row'>
                                    <span className='text-white font-satoshi font-medium text-[20px] pb-4 pr-2'>
                                        {project.name}
                                    </span>
                                    <img src={arrow} className='w-[10px] transform group-hover:-translate-y-2 group-hover:translate-x-2 transition duration-200'/>
                                </div>
                                <p className='text-white font-satoshi pb-4 max-w-md'>
                                    {project.description}
                                </p>
                                <ul className='flex flex-row items-center'>
                                    {project.languages.map((language, idx) => (
                                        <li key={idx} className='pr-4'>
                                            <div className='bg-black px-2 rounded-md bg-opacity-50 text-white font-satoshi font-light'>
                                                {language}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    </div>
  );
}

export default Instances;