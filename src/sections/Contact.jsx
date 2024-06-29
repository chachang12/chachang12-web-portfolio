import React from 'react'
import { email } from '../assets'
import { arrow } from '../assets'   

const Contact = () => {
  return (
    <div id='contact' className='flex pb-10 md:pb-10 md:w-[40%]'>
        <div className='flex flex-col md:items-start '>
            <a href="mailto:gimchang30@gmail.com">
                <div className='group flex flex-row'>
                    <span className='hidden md:block font-satoshi font-bold text-white text-[20px] md:text-[40px] pr-2 hover:text-crimson-red'>
                        Get In Touch
                    </span>
                    <img src={arrow} className='hidden md:block w-[15px] transform group-hover:-translate-y-2 group-hover:translate-x-2 transition duration-200 pt-4'/>
                </div>
            </a>
            <span className='md:hidden font-satoshi font-bold text-white flex text-[20px] md:text-[40px]'>
                Get In Touch
            </span>
            <p className='font-satoshi text-white space-y-6 font-light md:text-left'>
                Feel free to reach out if you have any inquiries, potential opportunities, questions about previous projects, or if you need further clarification. I look forward to hearing from you.
            </p>
            <a href="mailto:gimchang30@gmail.com" className='flex justify-center'>
                <img src={email} className='md:hidden w-[70px] opacity-50 hover:opacity-100' />
            </a>
            
        </div>
    </div>
    
  )
}

export default Contact