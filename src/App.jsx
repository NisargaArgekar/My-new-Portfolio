import Hero from './components/Hero';
import About from './components/About';
import './App.css'
import { ThemeProvider } from './components/theme-provider';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen w-full bg-white text-black dark:bg-[#111] dark:text-white transition-colors duration-300">
        <div className="flex justify-end items-center p-4">
          <ThemeToggle />
        </div>
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
