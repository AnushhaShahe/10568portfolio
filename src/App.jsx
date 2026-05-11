import Sidebar from './components/Sidebar';
import FloatingBackground from './components/FloatingBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Social from './components/sections/Social';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen selection:bg-primary/25 selection:text-primary">
      <FloatingBackground />
      <Sidebar />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-20 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white lg:focus:top-4"
      >
        Skip to content
      </a>

      <div className="relative z-10 min-w-0 flex-1 lg:pl-[280px]">
        <main className="px-4 pb-16 pt-[4.5rem] sm:px-8 lg:px-12 lg:pt-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Social />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
