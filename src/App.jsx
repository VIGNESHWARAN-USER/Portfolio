import { useRef } from 'react';
import Main from './components/Main';
import Contactme from './components/Contactme';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  const contactref = useRef(null);
  const projectref = useRef(null);
  const experienceref = useRef(null);

  return (
    <div className="bg-[#0d1117] min-h-screen overflow-y-auto scrollbar-hide scroll-smooth">
      <Main 
        contactref={contactref} 
        projectref={projectref} 
        experienceref={experienceref} 
      />

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
