import React from 'react'
import { AboutMeText, LanguageScroll } from '../components'
import { memoji, linkedin, github } from '../assets'
import Ticker from 'react-ticker';

const About = () => {
  return (
    <div className='flex flex-col max-w-7xl mx-auto px-4'>
        <div className='pl-40'>
            <div className='flex flex-row'>
                <div id='about' className=' pr-20'>
                    <h1 className='font-satoshi text-white text-[80px] font-bold'>
                        About Me
                    </h1>
                    <div>
                        <AboutMeText />
                    </div>
                    
                </div>
                <div className='flex flex-col items-center pr-40'>
                    <div className=''>
                        <img src={memoji} alt="memoji" className='w-[1500px]'/>
                    </div>
                    <div className='flex flex-row space-x-20 py-4'>
                        <img src={linkedin} alt="linkedin" className='w-[100px]'/>
                        <img src={github} alt="memoji" className='w-[100px]'/>
                    </div>
                </div>
                
            </div>
            <h2 className='font-satoshi text-white text-[32px] font-medium py-4'>
                Recent Work In:
            </h2>
        </div>
        
        <div className='py-4'>
            <LanguageScroll />
        </div>

    </div>
    
    
    
  )
}

export default About