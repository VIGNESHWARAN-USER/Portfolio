import React from 'react'
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gfg from "../assets/gfg.png";
import hackerrank from "../assets/hackerrank.png"
import { FaLocationDot } from 'react-icons/fa6'



const Aboutme = () => {

  return (
    <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-24 relative bg-[#0e1116] min-h-screen overflow-hidden">
      <h1 className="text-[#C9D1D9] font-bold text-[32px] sm:text-[40px] md:text-[60px] mb-12">About Me</h1>

      <div className="absolute -right-64 -top-52 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>
      <div className="absolute -left-64 -bottom-52 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>
      <div className="bg-white/20  mx-[10%] lg:flex-row relative rounded-xl backdrop-blur-lg p-6 md:p-10 gap-6 md:gap-10 mb-20">
        <h1 className='text-white text-2xl mb-4 font-bold '>About Me</h1>
        <p className='text-white mb-8 text-xl'>I'm Vigneshwaran M, a final year B.E. Computer Science and Engineering student. I enjoy building web applications, solving problems, and exploring new technologies.

I work with tools like React, Node.js, Python, Java, and MySQL, and I’ve developed projects ranging from health systems to matchmaking platforms.

Right now, I'm focused on improving my DSA skills and preparing for product-based company interviews.</p>
        <FaLocationDot className='absolute text-white text-xl mb-8 items-center'/><p className='text-white mb-8 text-xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Salem, Tamil Nadu</p>
         <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-8">
            <p className='flex items-center text-white text-xl'>Checkout My Profiles :</p>
            <a href="https://leetcode.com/u/VIGNESHWARAN-M" target="_blank" rel="noopener noreferrer">
              <img src={leetcode} alt="leetcode" className="w-10 sm:w-12 rounded-lg p-2" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/vigneshwai7zj" target="_blank" rel="noopener noreferrer">
              <img src={gfg} alt="gfg" className="w-10 sm:w-12 rounded-lg p-2" />
            </a>
            <a href="https://www.hackerrank.com/profile/vigneshwaran_co2" target="_blank" rel="noopener noreferrer">
              <img src={hackerrank} alt="hackerrank" className="w-10 sm:w-12 rounded-lg p-2" />
            </a>
            <a href="https://github.com/VIGNESHWARAN-USER" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-10 sm:w-12 rounded-lg p-2" />
            </a>
            <a href="https://www.linkedin.com/in/vigneshwaran-developer" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-10 sm:w-12 rounded-lg p-2" />
            </a>
          </div>
      </div>

    </div>
  )
}

export default Aboutme
