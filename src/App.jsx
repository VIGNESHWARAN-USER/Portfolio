import { useRef } from 'react';
import Main from './components/Main';
import Contactme from './components/Contactme';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Aboutme from './components/Aboutme';

function App() {
  const contactref = useRef(null);
  const projectref = useRef(null);
  const experienceref = useRef(null);
  const aboutref = useRef(null);

  return (
    <div className="bg-[#0d1117] min-h-screen overflow-y-auto scrollbar-hide scroll-smooth">
      <Main 
        contactref={contactref} 
        projectref={projectref} 
        experienceref={experienceref} 
        aboutref={aboutref}
      />

      <div ref={aboutref}>
          <Aboutme />
      </div>

      <div ref={experienceref}>
          <Experience />
      </div>

      <div ref={projectref}>
          <Projects />
      </div>

      <div ref={contactref}>
          <Contactme />
      </div>
    </div>
  );
}

export default App;
