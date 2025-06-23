import Hero from './components/Hero';
import About from './components/About';
import './App.css'
import { ThemeProvider } from './components/theme-provider';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  

  return (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <div>
    <Hero />
    <About/>
    <Skills />
    <Projects/>
    <Experience/>
    <Contact/>
    <Footer/>
     
       </div>
    </ThemeProvider>

  )
}

export default App
