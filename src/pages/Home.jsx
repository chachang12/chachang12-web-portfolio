import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { NavBar, NameHero, Socials } from '../components';
import { About, Projects, Contact, Footer, Experience } from '../sections';
import '../index.css'

const Home = () => {
  // Intersection Observer hook to trigger animations for each section
  const [refNameHero, inViewNameHero] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [refAbout, inViewAbout] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [refProjects, inViewProjects] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [refExperience, inViewExperience] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [refContact, inViewContact] = useInView({ triggerOnce: false, threshold: 0.5 });
  const [refFooter, inViewFooter] = useInView({ triggerOnce: false, threshold: 0.5 });

  // State to track if the device is a desktop
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Modify animation hooks to conditionally apply based on isDesktop state
  const fadeInUpNameHero = useSpring({
    opacity: isDesktop ? (inViewNameHero ? 1 : 0) : 1, // Ensure visibility on mobile
    transform: isDesktop ? (inViewNameHero ? 'translateY(0)' : 'translateY(20px)') : 'translateY(0)',
    config: { mass: 1, tension: 120, friction: 14 },
  });
  
  const fadeInUpAbout = useSpring({
    opacity: isDesktop ? (inViewAbout ? 1 : 0) : 1, // Ensure visibility on mobile
    transform: isDesktop ? (inViewAbout ? 'translateY(0)' : 'translateY(20px)') : 'translateY(0)',
    config: { mass: 1, tension: 120, friction: 14 },
  });
  
  const fadeInUpProjects = useSpring({
    opacity: isDesktop ? (inViewProjects ? 1 : 0) : 1, // Ensure visibility on mobile
    transform: isDesktop ? (inViewProjects ? 'translateY(0)' : 'translateY(20px)') : 'translateY(0)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const fadeInUpExperience = useSpring({
    opacity: isDesktop ? (inViewExperience ? 1 : 0) : 1, // Ensure visibility on mobile
    transform: isDesktop ? (inViewExperience ? 'translateY(0)' : 'translateY(20px)') : 'translateY(0)',
    config: { mass: 1, tension: 120, friction: 14 },
  });
  
  const fadeInUpContact = useSpring({
    opacity: isDesktop ? (inViewContact ? 1 : 0) : 1, // Ensure visibility on mobile
    transform: isDesktop ? (inViewContact ? 'translateY(0)' : 'translateY(20px)') : 'translateY(0)',
    config: { mass: 1, tension: 120, friction: 14 },
  });
  
  const fadeInUpFooter = useSpring({
    opacity: isDesktop ? (inViewFooter ? 1 : 0) : 1, // Ensure visibility on mobile
    transform: isDesktop ? (inViewFooter ? 'translateY(0)' : 'translateY(20px)') : 'translateY(0)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <>
      <div className='angled-gradient text-opacity-50'>
        <div className='flex justify-center w-full font-satoshi'>
          <div className='flex flex-col w-full md:w-[70%] mx-4 md:mx-0'>
            <div className='hidden md:block'>
              <NavBar />
            </div>
            
            <div id='name' ref={refNameHero} className='w-full flex justify-start md:justify-center'>
              <animated.div style={fadeInUpNameHero}>
                <NameHero />
              </animated.div>
            </div>
            <div className='md:hidden justify-start w-full pb-2'>
              <animated.div style={fadeInUpNameHero}>
                <Socials />
              </animated.div>
            </div>
            
            <div id='about' ref={refAbout} className='md:pb-10'>
              <h1 className='sticky top-0 z-50  md:hidden text-white  font-semibold text-[20px] backdrop-blur py-3'>
                    About
              </h1>
              <animated.div style={fadeInUpAbout}>
                <About />
              </animated.div>
            </div>
            
            <div id='project' ref={refProjects} className='w-full md:pb-10 '>
              <h1 className='sticky top-0 z-50 md:hidden text-white font-semibold text-[20px] backdrop-blur py-3'>
                Projects
              </h1>
              <animated.div style={fadeInUpProjects}>
                <Projects />
              </animated.div>
            </div>
            <div id='experience' ref={refExperience} className='w-full pb-10'>
              <h1 className='sticky top-0 z-50 md:hidden text-white font-semibold text-[20px] backdrop-blur py-3'>
                Experience
              </h1>
              <animated.div style={fadeInUpExperience}>
                <Experience />
              </animated.div>
            </div>
            <div ref={refContact} className=''>
              <animated.div style={fadeInUpContact}>
                <Contact />
              </animated.div>
            </div>
            
            <div ref={refFooter} className='pb-[25px]'>
              <animated.div style={fadeInUpFooter}>
                <Footer />
              </animated.div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;