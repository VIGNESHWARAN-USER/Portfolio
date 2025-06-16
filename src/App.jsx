import { useEffect, useRef } from 'react';
import Main from './components/Main';
import Contactme from './components/Contactme';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Aboutme from './components/Aboutme';

function App() {
  const contactref = useRef(null);
  const projectref = useRef(null);
  const experienceref = useRef(null);
  const aboutref = useRef(null)

  return (
    <div className="bg-[#0d1117] min-h-screen overflow-y-auto scrollbar-hide scroll-smooth">
      <Main 
        contactref={contactref} 
        projectref={projectref} 
        experienceref={experienceref} 
        aboutref = {aboutref}
      />

      <section ref={aboutref} >
        <Aboutme />
      </section>

      <section ref={experienceref} >
        <Experience />
      </section>

      <section ref={projectref} >
        <Projects />
      </section>

      <section ref={contactref}>
        <Contactme />
      </section>
    </div>
  );
}

export default App;
