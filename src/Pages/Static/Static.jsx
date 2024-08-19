import React, { useState } from 'react';
import profile from '../../Images/Profile1.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Static = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      {/* Sidebar Button for Mobile */}
      {(sidebarOpen === false)?
      <button 
        className="md:hidden fixed top-1/2 transform -translate-y-1/2 z-50 bg-yellow-500 hover:bg-yellow-400 h-14 w-4 text-xl font-medium rounded-r-xl shadow-lg focus:outline-none transition duration-300"
        onClick={handleSidebarToggle}
      >
        &gt;
      </button>:(null)}

      {/* Sidebar */}
      <div 
        className={`bg-gray-700 p-4 mt-32 rounded-xl shadow-lg fixed z-40 top-0 left-0 md:mt-8 w-3/4 sm:w-1/2 md:w-1/4 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:relative md:transform-none md:max-h-5/6 md:ms-4`}
      >
        <img 
          src={profile} 
          alt="Profile of Vigneshwaran M" 
          className="w-40 h-40 mx-auto mt-4 rounded-xl shadow-md" 
        />
        <div className="text-white flex flex-col items-center mt-4">
          <p className="font-extrabold text-2xl tracking-wide">VIGNESHWARAN M</p>
          <p className="font-medium text-lg mt-1">B.E CSE</p>
          <p className="font-bold text-yellow-400 text-xl mt-2 tracking-wide">FULL STACK DEVELOPER</p>
          <p className="text-center mt-4 p-4 mx-2 italic leading-relaxed bg-gray-800 rounded-lg shadow-inner">
            A passionate full stack developer who is ready to learn and practice everyday.
          </p>
        </div>
        <div className="text-white mt-3 text-center">
          <p className="text-lg">Follow me on:</p>
          <div className="flex items-center justify-center mt-4 space-x-6">
            <a 
              target='_blank' 
              href='https://www.linkedin.com/in/vigneshwaran-fullstackdeveloper' 
              aria-label="Visit LinkedIn profile"
            >
              <FaLinkedin className="text-3xl rounded-sm hover:text-gray-400 transform transition-all duration-300 hover:scale-110" />
            </a>
            <a 
              target='_blank' 
              href='https://www.instagram.com/your-profile' 
              aria-label="Visit Instagram profile"
            >
              <FaSquareInstagram className="text-3xl rounded-sm hover:text-gray-400 transform transition-all duration-300 hover:scale-110" />
            </a>
            <a 
              target='_blank' 
              href='https://github.com/VIGNESHWARAN-USER' 
              aria-label="Visit GitHub profile"
            >
              <FaGithub className="text-3xl hover:text-gray-400 transform transition-all duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={handleSidebarToggle}
        ></div>
      )}
    </>
  );
};

export default Static;
