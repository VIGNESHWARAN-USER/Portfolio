import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Academics = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const data = {
    '10th': { school: 'Vivekananda Balamandir Matriculation School, Attayampatti', year: '2020', percentage: 65 },
    '12th': { school: 'Sri Vidhyaa mandir matric Hr. Sc. School, Nachipatti', year: '2022', percentage: 94.5 },
    'CGPA': { school: 'Knowledge Institute Of Technology', year: '2024 - 2026', cgpa: 8.6 },
    'GPA': [
      { semester: 'Sem 1', gpa: 8.68 },
      { semester: 'Sem 2', gpa: 8.45 },
      { semester: 'Sem 3', gpa: 8.78 },
      { semester: 'Sem 4', gpa: 8.73 }
    ],
  };

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
  };

  const renderChart = () => {
    if (selectedCategory === 'GPA') {
        const gpaData = {
          labels: data.GPA.map(item => item.semester),
          datasets: [
            {
              label: 'GPA',
              data: data.GPA.map(item => item.gpa),
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 2,
            },
          ],
        };
        return (
          <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
            <h3 className="text-lg text-yellow-400 font-semibold">Pursued at: Knowledge Institute Of Technology</h3>
            <h4 className="text-md text-white">Year: 2024 - 2026</h4>
            <Bar
              data={gpaData}
              options={{
                responsive: true,
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
                      text: 'GPA Results per Semester',
                      color: '#FFFFFF',
                      font: {
                        size: 18,
                        weight: 'bold',
                      },
                    },
                  },
              }}
            />
          </div>
        );
      } else if (selectedCategory) {
      const selectedData = data[selectedCategory];
      const commonData = {
        labels: [selectedCategory],
        datasets: [
          {
            label: `${selectedCategory}`,
            data: [selectedData.percentage || selectedData.cgpa],
            backgroundColor: 'rgba(153, 102, 255, 0.4)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 2,
          },
        ],
      };
      return (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <h3 className="text-lg text-yellow-400 font-semibold">Pursued at: {selectedData.school}</h3>
          <h4 className="text-md text-white">Year: {selectedData.year}</h4>
          <Bar
            data={commonData}
            options={{
              responsive: true,
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
                  text: `Mark / ${selectedCategory}`,
                  color: '#FFFFFF', 
                  font: {
                    size: 18,
                    weight: 'bold',
                  },
                },
              },
            }}
          />
        </div>
      );
    } else {
        const commonData = {
          labels: ['10th', '12th', 'CGPA'],
          datasets: [
            {
              label: 'Marks / Grade',
              data: [65, 94.5, 86],
              backgroundColor: 'rgba(153, 102, 255, 0.4)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 2,
            },
          ],
        };
        return (
          <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
            <Bar
              data={commonData}
              options={{
                responsive: true,
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
                      text: 'Academic Performance',
                      color: '#FFFFFF', 
                      font: {
                        size: 18,
                        weight: 'bold',
                      },
                    },
                  },
              }}
            />
          </div>
        );
      }
  };

  return (
    <div className='md:w-4/6 bg-gray-700 flex flex-col items-center rounded-xl mt-8 md:ms-4 p-4'>
      <div className='flex flex-wrap justify-center gap-4'>
        <button 
          onClick={() => handleButtonClick('10th')} 
          className={`w-28 h-20 bg-gray-600 text-yellow-500 font-semibold text-xl rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${selectedCategory === '10th' ? 'bg-gray-500' : ''}`}>
          10th
        </button>
        <button 
          onClick={() => handleButtonClick('12th')} 
          className={`w-28 h-20 bg-gray-600 text-yellow-500 font-semibold text-xl rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${selectedCategory === '12th' ? 'bg-gray-500' : ''}`}>
          12th
        </button>
        <button 
          onClick={() => handleButtonClick('GPA')} 
          className={`w-28 h-20 bg-gray-600 text-yellow-500 font-semibold text-xl rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${selectedCategory === 'GPA' ? 'bg-gray-500' : ''}`}>
          GPA
        </button>
        <button 
          onClick={() => handleButtonClick('CGPA')} 
          className={`w-28 h-20 bg-gray-600 text-yellow-500 font-semibold text-xl rounded-lg shadow-md transition-transform duration-300 hover:scale-105 ${selectedCategory === 'CGPA' ? 'bg-gray-500' : ''}`}>
          CGPA
        </button>
      </div>
      {renderChart()}
    </div>
  );
};

export default Academics;
