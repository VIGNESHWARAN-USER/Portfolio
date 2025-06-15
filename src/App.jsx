import { useRef } from 'react';
import Main from './components/Main';
import Contactme from './components/contactme';
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

      <section ref={experienceref} className="px-4 sm:px-8 md:px-16 lg:px-24">
        <Experience />
      </section>

      <section ref={projectref} className="px-4 sm:px-8 md:px-16 lg:px-24">
        <Projects />
      </section>

      <section ref={contactref} className="px-4 sm:px-8 md:px-16 lg:px-24 pb-10">
        <Contactme />
      </section>
    </div>
  );
}

export default App;
