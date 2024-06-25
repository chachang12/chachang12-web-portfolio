import React from 'react'
import { email } from '../assets'

const Contact = () => {
  return (
    <div id='contact' className='flex justify-center pb-40'>
        <div className='flex flex-col items-center max-w-lg'>
            <span className='font-satoshi font-bold text-white flex  text-[60px]'>
                Get In Touch
            </span>
            <p className='font-satoshi text-white space-y-10 font-light text-center pb-4'>
                Feel free to reach out if you have any inquiries about potential opportunities, questions about previous projects, or if you need further clarification. I look forward to hearing from you.
            </p>
            <a href="mailto:gimchang30@gmail.com">
                <img src={email} className='w-20'/>
            </a>
            
        </div>
    </div>
    
  )
}

export default Contact