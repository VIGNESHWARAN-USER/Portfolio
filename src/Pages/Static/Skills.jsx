import React, { useState } from 'react';
import { FaFileExcel, FaFileWord, FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiPowerbi, SiMongodb, SiStreamlit } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { GrMysql } from 'react-icons/gr';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const skillsData = [
  { icon: <FaFileExcel />, link: 'https://www.microsoft.com/en-us/microsoft-365/excel', name: 'Excel' },
  { icon: <FaFileWord />, link: 'https://www.microsoft.com/en-us/microsoft-365/word', name: 'Word' },
  { icon: <SiPowerbi />, link: 'https://powerbi.microsoft.com/', name: 'PowerBI' },
  { icon: <FaReact />, link: 'https://reactjs.org/', name: 'ReactJS' },
  { icon: <RiNextjsFill />, link: 'https://nextjs.org/', name: 'NextJS' },
  { icon: <GrMysql />, link: 'https://www.mysql.com/', name: 'MySQL' },
  { icon: <FaNodeJs />, link: 'https://nodejs.org/', name: 'NodeJS' },
  { icon: <SiMongodb />, link: 'https://www.mongodb.com/', name: 'MongoDB' },
  { icon: <SiStreamlit />, link: 'https://streamlit.io/', name: 'Streamlit' },
  { icon: <FaGithub />, link: 'https://github.com/', name: 'Github' },
  { icon: <FaJava />, link: 'https://www.java.com/', name: 'Java' },
  { icon: <FaPython />, link: 'https://www.python.org/', name: 'Python' },
  { icon: <FaHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', name: 'HTML' },
  { icon: <FaCss3Alt />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS', name: 'CSS' },
  { icon: <RiTailwindCssFill />, link: 'https://tailwindcss.com/', name: 'TailwindCSS' },
  { icon: <FaJs />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', name: 'JavaScript' },
];
const AOI = ['Problem Solving', 'Coding', 'Web Development', 'Designing', 'UI/UX', 'Power BI']
const skills = ['Communication', 'Leadership', 'Problem Solving', 'Web Development', 'App Development'];

const Skills = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <div className='md:w-4/6 w-full me-5'>
      <div className='text-white bg-gray-700 rounded-xl m-4 p-4 w-full mt-8'>
        <b className='text-yellow-400'>Technologies Known</b>
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedSection === 'tech' ? 'max-h-screen' : 'max-h-0'}`}>
          {expandedSection === 'tech' && skillsData.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className='text-white transform transition-transform duration-300 hover:scale-110'
            >
              <div className='flex flex-col items-center bg-gray-600 p-4 m-4 rounded-lg hover:bg-gray-500'>
                <div className='text-4xl mb-2'>{skill.icon}</div>
                <span className='mt-2 text-sm'>{skill.name}</span>
              </div>
            </a>
          ))}
        </div>
        <button
          onClick={() => toggleSection('tech')}
          className='flex items-center text-blue-300 mt-4 focus:outline-none'
        >
          {expandedSection === 'tech' ? (
            <>
              <span>Show Less</span> <FiChevronUp className='ml-2' />
            </>
          ) : (
            <>
              <span>Show More</span> <FiChevronDown className='ml-2' />
            </>
          )}
        </button>
      </div>
      <div className='text-white bg-gray-700 rounded-xl m-4 p-4 w-full mt-8'>
        <b className='text-yellow-400'>Skills</b>
        <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedSection === 'skills' ? 'max-h-screen' : 'max-h-0'}`}>
          {expandedSection === 'skills' && skills.map((skill, index) => (
            <div key={index} className='text-white bg-gray-600 p-4 m-4 rounded-lg'>
              <div className='text-lg'>{skill}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => toggleSection('skills')}
          className='flex items-center text-blue-300 mt-4 focus:outline-none'
        >
          {expandedSection === 'skills' ? (
            <>
              <span>Show Less</span> <FiChevronUp className='ml-2' />
            </>
          ) : (
            <>
              <span>Show More</span> <FiChevronDown className='ml-2' />
            </>
          )}
        </button>
      </div>
      <div className='text-white bg-gray-700 rounded-xl m-4 p-4 w-full mt-8'>
        <b className='text-yellow-400'>Area Of Interest</b>
        <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedSection === 'aoi' ? 'max-h-screen' : 'max-h-0'}`}>
          {expandedSection === 'aoi' && AOI.map((skill, index) => (
            <div key={index} className='text-white bg-gray-600 p-4 m-4 rounded-lg'>
              <div className='text-lg'>{skill}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => toggleSection('aoi')}
          className='flex items-center text-blue-300 mt-4 focus:outline-none'
        >
          {expandedSection === 'aoi' ? (
            <>
              <span>Show Less</span> <FiChevronUp className='ml-2' />
            </>
          ) : (
            <>
              <span>Show More</span> <FiChevronDown className='ml-2' />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Skills;
