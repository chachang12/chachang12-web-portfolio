import React from 'react';
import { languages, tools, frameworks } from '../constants';

const Skills = () => {
  return (
    <div className='flex flex-row space-x-20'>
      <div className='font-satoshi text-white'>
        <h3 className='text-[20px] font-semibold pb-2'>Languages</h3>
        <ul className='opacity-80 font-light'>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
      <div className='font-satoshi text-white'>
        <h3 className='text-[20px] font-semibold pb-2'>Tools</h3>
        <ul className='opacity-80 font-light'>
          {tools.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
      <div className='font-satoshi text-white'>
        <h3 className='text-[20px] font-semibold pb-2'>Frameworks</h3>
        <ul className='opacity-80 font-light'>
          {frameworks.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;