import React from 'react'
import { linkedin, githubMark, instagram } from '../assets'
import { GitHubIcon, LinkedInIcon, InstagramIcon } from './'

const Socials = () => {
  return (
    <div className='flex flex-row space-x-4'>
        <div className=''>
        <a href="https://github.com/chachang12" target="_blank" rel="noopener noreferrer">
          <GitHubIcon color={'#FFFFFF'} width={50} height={50} opacity={0.5}/>
        </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/chachang12/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon color={'#FFFFFF'} width={50} opacity={0.5}/>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/c_chang30/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon color={'#FFFFFF'} width={50} opacity={0.5}/>
          </a>
        </div>
    </div>
  )
}

export default Socials