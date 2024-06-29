import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col font-satoshi text-white space-y-4 md:space-y-8 font-light text-[18px]'>
        <p>
        In 2016, at 14 years old, I discovered my passion for improving and innovating computer programs through tinkering with Minecraft source code and developing mod packs for me and my friends to play. This discovery was just the beginning, and now, in 2024, I am just a year away from attaining my Bachelors of Science in Computer Science from <a href='https://www.southern.edu/academics/computing/' target="_blank" rel="noopener noreferrer" className=' font-medium hover:text-crimson-red'>
        Southern Adventist University</a>. 
        </p>
        <p className='text-opacity-0'>
        My passion for creation and innovation has only increased as personal and school projects have consumed my time. Today, my primary focus is full-stack web applications built on various platforms and frameworks. Outside of classes, I perform contract consulting work for software development and AI training. 
        </p>
        <p>
        Outside work, I usually play pickleball and golf or explore cities and restaurants with my friends. 
        </p>
    </div>
    
  )
}

export default AboutMeText