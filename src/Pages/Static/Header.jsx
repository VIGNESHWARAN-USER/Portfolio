import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CV from '../../Images/CV.pdf';
import profile from '../../Images/Profile1.jpg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full bg-gray-900 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16 px-2">
        <div className='flex'>
        <img src={profile} className='w-14 me-4 rounded-full h-14'/>
        <p className="text-white text-xl font-bold border-b-4 border-yellow-500 rounded-2xl p-2">
          Vigneshwaran M
        </p></div>
        
        <div className="hidden md:flex font-medium space-x-8">
          <Link 
            to='../academics' 
            className='text-white focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 rounded p-2 ease-in-out'>
            Academics
          </Link>
          <Link 
            to='../projects' 
            className='text-white focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 rounded p-2 ease-in-out'>
            Projects
          </Link>
          <Link 
            to='../skills' 
            className='text-white focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 rounded p-2 ease-in-out'>
            Skills
          </Link>
          <Link 
            to='../hobbie' 
            className='text-white focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 rounded p-2 ease-in-out'>
            Hobbies
          </Link>
          <Link 
            to='../contact' 
            className='text-white focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 rounded p-2 ease-in-out'>
            Contact
          </Link>
        </div>

        <a 
          href={CV} 
          download 
          className='hidden md:inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out relative'>
          <span className="absolute inset-0 w-full h-full rounded-full bg-yellow-500 opacity-50 blur-xl filter group-hover:blur-2xl transition duration-300 ease-in-out"></span>
          Download CV
        </a>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden w-1/2 font-medium rounded-xl flex absolute right-2 flex-col items-center bg-gray-800 animate-slide-down">
          <Link 
            to='../academics' 
            onClick={handleLinkClick} 
            className='block text-white py-2 px-4 focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 ease-in-out'>
            Academics
          </Link>
          <Link 
            to='../projects' 
            onClick={handleLinkClick} 
            className='block text-white py-2 px-4 focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 ease-in-out'>
            Projects
          </Link>
          <Link 
            to='../skills' 
            onClick={handleLinkClick} 
            className='block text-white py-2 px-4 focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 ease-in-out'>
            Skills
          </Link>
          <Link 
            to='../hobbie' 
            onClick={handleLinkClick} 
            className='block text-white py-2 px-4 focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 ease-in-out'>
            Hobbies
          </Link>
          <Link 
            to='../contact' 
            onClick={handleLinkClick} 
            className='block text-white py-2 px-4 focus:text-yellow-400 hover:text-yellow-400 transition duration-300 hover:bg-gray-600 ease-in-out'>
            Contact
          </Link>
          <a 
            href={CV} 
            download 
            className='block bg-yellow-500 hover:bg-yellow-400 text-gray-700 hover:text-gray-800 font-semibold py-2 px-4 text-center rounded-full shadow-md transition duration-300 ease-in-out my-2 relative'>
            <span className="absolute inset-0 w-full h-full rounded-full bg-yellow-500 opacity-50 blur-xl filter group-hover:blur-2xl transition duration-300 ease-in-out"></span>
            Download CV
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
