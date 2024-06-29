import React from 'react'

const NameHero = () => {
  return (
    <div className='flex justify-start md:justify-center md:pt-40 md:pb-60 pt-4 pb-4'>
        <div className='flex flex-col space-y-[-20px] items-start md:items-center'>
            
            <div className='flex flex-col space-y-[-40px]'>
                <span className='text-left md:text-center text-white pb-6 md:pb-0 md:text-[128px] text-[40px] font-satoshi font-bold'>
                    Carson
                </span>
                <span className='text-left md:text-center text-white pb-6 md:pb-8 md:text-[128px] text-[40px]  font-satoshi font-bold'>
                    Chang
                </span>
            </div>
            <span className='md:text-center text-left text-white md:text-[20px] text-[16px] font-satoshi'>
                Full Stack Developer
            </span>
        </div>
    </div>
    
  )
}

export default NameHero