import React from 'react'

const NameHero = () => {
  return (
    <div className='flex justify-center py-60'>
        <div className='flex flex-col space-y-[-20px]'>
            <span className='text-center text-white text-[20px] font-satoshi'>
                Full Stack Developer
            </span>
            <div className='flex flex-col space-y-[-40px]'>
                <span className='text-center text-white text-[128px] font-satoshi font-bold'>
                    Carson
                </span>
                <span className='text-center text-white text-[128px] font-satoshi font-bold'>
                    Chang
                </span>
            </div>
            
        </div>
    </div>
    
  )
}

export default NameHero