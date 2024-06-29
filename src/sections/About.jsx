import React from 'react'
import { AboutMeText, Skills, GitHubIcon, LinkedInIcon } from '../components'
import { memoji, linkedin, githubMark } from '../assets'


const About = () => {
    return (
      <div className='flex flex-col mx-auto'>
          <div className=''>
              <div className='flex flex-row'>
                  <div className='md:pr-20'>
                      {/* Adjust the text size for smaller screens */}
                      <h1 className='hidden md:block font-satoshi text-white md:text-[40px] text-[20px] font-bold'>
                          About
                      </h1>
                      <div>
                          <AboutMeText />
                      </div>
                      
                  </div>
                  <div className='flex flex-col items-center'>
                      <div className='hidden md:block'>
                          <img src={memoji} alt="memoji" className='w-[1500px]'/>
                      </div>
                      <div className='hidden md:flex flex-row space-x-20 py-4'>
                        <a href="https://github.com/chachang12" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50">
                            <GitHubIcon color={'#FFFFFF'} width={100} height={100}/>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/chachang12/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 opacity-50">
                            <LinkedInIcon color={'#FFFFFF'} width={100} className="opacity-50 hover:opacity-100"/>
                        </a>
                        
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }

export default About