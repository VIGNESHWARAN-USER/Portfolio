import React, { useState } from 'react';
import cv from "../assets/cv.pdf";
import { Menu, X } from 'lucide-react'; // Lucide icons for hamburger and close

const Header = ({ contactref, projectref, experienceref, aboutref }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false); // Close menu after clicking
  };

  return (
    <header className="bg-[#0d1117] mt-8 text-white px-4 sm:px-8 md:px-24 py-6 flex items-center justify-between relative z-50">
      {/* Logo or Title */}
      <h1 className="text-lg font-semibold">VIGNESHWARAN</h1>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-10 items-center">
        <button onClick={() => scrollToSection(aboutref)} className="hover:bg-white hover:text-[#0d1117] px-4 py-2 rounded-xl transition-all">
          About
        </button>
        <button onClick={() => scrollToSection(projectref)} className="hover:bg-white hover:text-[#0d1117] px-4 py-2 rounded-xl transition-all">
          Projects
        </button>
        <button onClick={() => scrollToSection(experienceref)} className="hover:bg-white hover:text-[#0d1117] px-4 py-2 rounded-xl transition-all">
          Experience
        </button>
        <button onClick={() => scrollToSection(contactref)} className="hover:bg-white hover:text-[#0d1117] px-4 py-2 rounded-xl transition-all">
          Contact
        </button>
        <a download href={cv}>
          <button className="bg-[#1F51FF] px-4 py-2 rounded-lg hover:bg-[#012ECD] transition duration-300">
            Download CV
          </button>
        </a>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-[#0d1117] flex flex-col items-start px-6 py-4 gap-4 border-t border-gray-700 md:hidden transition-all duration-300">
          <button onClick={() => scrollToSection(projectref)} className="w-full text-left hover:text-[#1F51FF]">
            Projects
          </button>
          <button onClick={() => scrollToSection(experienceref)} className="w-full text-left hover:text-[#1F51FF]">
            Experience
          </button>
          <button onClick={() => scrollToSection(contactref)} className="w-full text-left hover:text-[#1F51FF]">
            Contact
          </button>
          <a download href={cv} className="w-full">
            <button className="bg-[#1F51FF] w-full px-4 py-2 rounded-lg hover:bg-[#012ECD] transition duration-300 mt-2">
              Download CV
            </button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
