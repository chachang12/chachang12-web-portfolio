import { NavBar, NameHero } from '../components'
import { About, Projects, Contact, Footer } from '../sections'

const Home = () => {
  return (
    <>
      <div>
        <div className='flex justify-center w-full'>
          <div className='flex flex-col items-center w-[70%]'>
            <NavBar />
            <NameHero />
            <div className='pb-10'>
              <About />
            </div>
            <Projects />
            <Contact />
            <Footer />
        </div>
      </div>

      </div>
      
    </>
  )
}

export default Home