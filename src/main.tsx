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
      {/*maybe show gisma logo*/}
    <Education/>
    {/*maybe show images for projects  */}
    <Projects/>
    <Experience/>
    <Certificates/>
    {/*seperate soft from technical skills using card  */}
    {/* Maybe show icon for each skill not just name */}
    <Skills/>
    <Contact/>
    <Footer/>
  </StrictMode>
)
