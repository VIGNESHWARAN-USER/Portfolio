import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'CECT Portal',
      shortDescription: 'A portal for CECT operations...',
      fullDescription: 'The CECT Portal is a comprehensive tool for managing CECT operations, including user management, data analysis, and report generation...',
    },
    {
      id: 2,
      title: 'Matrimony Site',
      shortDescription: 'A matrimonial site connecting people...',
      fullDescription: 'The Matrimony Site is a platform designed to help individuals find compatible life partners through various search filters and profile matching...',
    },
    {
      id: 3,
      title: 'JSW OHC',
      shortDescription: 'Occupational Health Center system...',
      fullDescription: 'The JSW OHC project is an Occupational Health Center management system, providing functionalities like health record tracking, appointment scheduling, and reporting...',
    },
  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <div className=' md:w-4/6 w-full me-5'>
      {projects.map((project) => (
        <div
          key={project.id}
          className='text-white bg-gray-700 rounded-xl m-4 p-4 w-full mt-8'
        >
          <b className='text-yellow-400'>{project.title}</b>
          <div className={`mt-2 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedProject === project.id ? 'max-h-screen' : 'max-h-0'}`}>
            <p className={`${expandedProject === project.id ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}>
              {project.fullDescription}
            </p>
          </div>
          <button
            onClick={() => toggleProject(project.id)}
            className='flex items-center text-blue-300 mt-4 focus:outline-none'
          >
            {expandedProject === project.id ? (
              <>
                <span>Show Less</span> <FiChevronUp  className='ml-2'/>
              </>
            ) : (
              <>
                <span>Show More</span> <FiChevronDown  className='ml-2'/>
              </>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
