import { useState } from 'react'
import { NavBar, NameHero } from './components'
import { About, Projects, Contact, Footer } from './pages'


function App() {
  return (
    <>
      <div>
        <NavBar />
        <NameHero />
        <About />
        <Projects />
        <Contact />
        <Footer />

      </div>
      
    </>
  )
}

export default App
