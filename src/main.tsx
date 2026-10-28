import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css.ts'
import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import Education from './components/Education.tsx'
import Projects from './components/Projects.tsx'
import Skills from './components/Skills.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'
import Experience from './components/Experience.tsx'
import Certificates from './components/Certificates.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*maybe show my face*/}
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Education/>
    <Certificates/>
    <Contact/>
    <Footer/>
  </StrictMode>
)
