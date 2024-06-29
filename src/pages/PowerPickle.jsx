import React from 'react'
import { PowerPickleIcon, CarsonLogo, ArrowIcon } from '../components'
import { ppdemonocut, ranks, githubMark, arrow } from '../assets'
import { useNavigate } from 'react-router-dom';



const PowerPickle = () => {
  const navigate = useNavigate();
  return (
    <div className='font-inter flex flex-col md:mx-4'>
      <div className='flex justify-center pt-4 pb-2 md:pb-0'>
        <PowerPickleIcon color={'black'} height={100} width={100}/>
      </div>
      <div id='Upper Half' className='flex flex-col md:flex md:flex-row'>
        <div className='flex flex-col items-start'>
          <h1 className='font-satoshi font-semibold text-[24px] md:font-bold md:text-[96px]'>
            Power Pickle
          </h1>
          <h2 className='md:text-[24px] font-semibold'>
            Multi-user full stack React application
          </h2>
          <p className='font-regular text-[16px]'>
            Compete with your friends and climb the ranks of Power Pickle’s innovative rating system.
          </p>
          <div className='py-4'>
            <img src={ranks} alt='Power Pickle Rankings' className='w-[650px]'/>
          </div>
          <p className='font-regular text-[16px] pb-4 md:pb-0'>
            Power Pickle features a dynamic ranking algorithm that determines user’s match making ratings based on their personal skill level, the skill level of their lobby, and their point differential.
          </p>
        </div>
        <div>
          <img src={ppdemonocut} alt='Power Pickle Demonstration' className='w-[850px]'/>
        </div>
      </div>
      <div id='Lower Half' className='flex md:flex-row flex-col pt-10 justify-between md:space-x-20'>
        <div className='flex md:flex-row flex-col md:space-x-8'>
          <div>
            <h2 className='md:text-[40px] text-[24px] font-medium'>
              Skills
            </h2>
            <div className='border-b-2 border-black md:w-[460px] w-auto'></div>
            <h6 className='font-light md:text-[20px] text-[16px] pt-2'>
            Database Management and Design <br/>
            Front-End Design and Frame working <br/>
            Database Querying <br/>
            Object Oriented Programming <br/>
            User Authentication<br/>
            State Management
            </h6>
          </div>
          <div className='flex md:flex-col flex-row space-x-12 md:space-x-0 pt-4 md:pt-0'>
            <div className='flex flex-col flex-start'>
              <h2 className='text-[24px] md:text-[40px] font-medium'>
                Front End
              </h2>
              <div className='border-b-2 border-black md:w-[200px]'></div>
              <h6 className='font-light md:text-[20px] text-[16px] pt-2'>
                HTML <br/>
                TailwindCSS
              </h6>
            </div>
            <div>
              <h2 className='text-[24px] md:text-[40px] font-medium' >
                Back End
              </h2>
              <div className='border-b-2 border-black md:w-[200px]'></div>
              <h6 className='md:text-[20px] text-[16px] font-light pt-2'>
                React <br/>
                Firebase
              </h6>
            </div>
          </div>
        </div>
        <a href="https://chachang12.github.io/Power-Pickle-Web/" target="_blank" rel="noopener noreferrer">
          <div className='flex items-center pt-4 pr-10 md:pr-10 group'>
            <div className="hidden md:block md:pr-10">
              <PowerPickleIcon color={'black'} height={253} width={250}/>
            </div>
            <div className='flex flex-col md:items-center pr-10 md:pr-0'>
              <h3 className='hidden md:block md:text-[30px] text-[24px] font-semibold md:text-right'>
                Join today
              </h3>
              <div className='flex flex-row items-baseline'>
                <h3 className='text-[26px] group-hover:text-royal-blue font-light md:text-right'>
                  Start climbing the ranks!
                </h3>
                <div className='md:pl-2 md:transform group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200 '>
                  <ArrowIcon width={15} />
                </div>
              </div>
              
            </div>
            
            
            <div className='sm:hidden block'>
              <PowerPickleIcon color={'black'} height={127} width={125}/>
            </div>
          </div>
        </a>
        
        
      </div>

      <div id='Footer' className='py-4'> 
        <div className='flex flex-col'>
            <div className=' flex flex-col items-start justify-start '>
              <div className=''>
                <a href="https://chachang12.github.io/Power-Pickle-Web/" target="_blank" rel="noopener noreferrer" className='group' >
                  <div className='pb-2'>
                    <img src= {githubMark} className='h-[50px] w-[50px]'/>
                  </div>
                  <div className='flex flex-row flex-start font-medium items-baseline'>
                    <span className='pr-1 group-hover:text-royal-blue'>
                      View the source code
                    </span>
                    <div className='hidden md:block w-[10px] transform group-hover:-translate-y-1 group-hover:translate-x-1 transition duration-200'>
                      <ArrowIcon width={10} />
                    </div>
                  </div>
                </a>
              </div> 
            </div>
            
          <span>
            Designed and developed by Carson Chang 2024
          </span>
          <span>
            Algorithm written in part with {' '}  
            <a href="https://www.linkedin.com/in/krishankanji/" target="_blank" rel="noopener noreferrer" className='font-medium hover:text-royal-blue'>
              Krishan Kanji
            </a>, B.A. C.S. UC Berkeley           
          </span>
          <div className='flex flex-col justify-center items-center my-4'>
            <button className='flex flex-col justify-center md:items-center' onClick={() => navigate('/')}>
              <div className='pb-4'>
                <CarsonLogo color={'black'} width={50} height={50}/>
              </div>
            </button>
            <span className='font-extralight text-[12px]'>
              Current version 0.1.0 Beta
            </span>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PowerPickle