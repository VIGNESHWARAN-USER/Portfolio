import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const gpaData = {
  labels: ['Hackerrank', 'Leetcode'],
  datasets: [
    {
      label: 'Problems Solved',
      data: [20, 15],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const skills = ['Learning new technologies', 'Coding in Hackerrank and Leetcode', 'Designing in Figma', 'Gaining Knowledge about current affairs'];

const Hobbies = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <div className='md:w-4/6 w-full me-5'>
      <div className='text-white bg-gray-700 rounded-xl m-4 p-4 w-full mt-8'>
        <b className='text-yellow-400'>Hobbies</b>
        <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedSection === 'skills' ? 'max-h-screen' : 'max-h-0'}`}>
          {expandedSection === 'skills' && skills.map((skill, index) => (
            <div key={index} className='text-white bg-gray-600 p-4 mb-4 rounded-lg'>
              <div className='text-base md:text-lg'>{skill}</div>
            </div>
          ))}
        </div>
        <button
          onClick={() => toggleSection('skills')}
          className='flex items-center text-blue-300 mt-4 focus:outline-none'
        >
          {expandedSection === 'skills' ? (
            <>
              <span className='text-base md:text-lg'>Show Less</span> <FiChevronUp className='ml-2' />
            </>
          ) : (
            <>
              <span className='text-base md:text-lg'>Show More</span> <FiChevronDown className='ml-2' />
            </>
          )}
        </button>
      </div>
      <div className='text-white bg-gray-700 rounded-xl me-0 m-4 p-4 mt-8'>
        <b className='text-yellow-400'>Coding Practice</b>
        <div className={`mt-4 overflow-hidden transition-max-height duration-500 ease-in-out ${expandedSection === 'aoi' ? 'max-h-screen' : 'max-h-0'}`}>
          {expandedSection === 'aoi' && (
            <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl h-64">
              <Bar
                data={gpaData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      ticks: {
                        color: '#FFFFFF',
                      },
                    },
                    y: {
                      ticks: {
                        color: '#FFFFFF',
                        beginAtZero: true,
                      },
                    },
                  },
                  plugins: {
                    legend: {
                      labels: {
                        color: '#FFFFFF',
                      },
                    },
                    title: {
                      display: true,
                      text: `Platform vs No. Of Problems Solved`,
                      color: '#FFFFFF',
                    },
                  },
                }}
              />
            </div>
          )}
        </div>
        <button
          onClick={() => toggleSection('aoi')}
          className='flex items-center text-blue-300 mt-4 focus:outline-none'
        >
          {expandedSection === 'aoi' ? (
            <>
              <span className='text-base md:text-lg'>Show Less</span> <FiChevronUp className='ml-2' />
            </>
          ) : (
            <>
              <span className='text-base md:text-lg'>Show More</span> <FiChevronDown className='ml-2' />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default Hobbies;
