import React from 'react';
import { motion } from 'framer-motion';
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gfg from "../assets/gfg.png";
import hackerrank from "../assets/hackerrank.png";
import { FaLocationDot } from 'react-icons/fa6';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Aboutme = () => {
  return (
    <motion.div
      className="py-12 px-4 sm:px-6 md:px-10 lg:px-24 relative bg-[#0e1116] min-h-screen overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <motion.h1
        className="text-[#C9D1D9] font-bold text-[32px] sm:text-[40px] md:text-[60px] mb-12"
        variants={fadeUp}
      >
        About Me
      </motion.h1>

      {/* Background Glows */}
      <div className="absolute -right-64 -top-52 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>
      <div className="absolute -left-64 -bottom-52 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>

      {/* Main Card */}
      <motion.div
        className="bg-white/20 mx-[10%] lg:flex-row relative rounded-xl backdrop-blur-lg p-6 md:p-10 gap-6 md:gap-10 mb-20"
        variants={fadeUp}
      >
        <motion.h1 className="text-white text-2xl mb-4 font-bold" variants={fadeUp}>
          About Me
        </motion.h1>
        <motion.p className="text-white mb-8 text-xl" variants={fadeUp}>
          I'm Vigneshwaran M, a final year B.E. Computer Science and Engineering student. I enjoy building web applications, solving problems, and exploring new technologies.

          I work with tools like React, Node.js, Python, Java, and MySQL, and I’ve developed projects ranging from health systems to matchmaking platforms.

          Right now, I'm focused on improving my DSA skills and preparing for product-based company interviews.
        </motion.p>

        <motion.div className="flex items-center mb-8" variants={fadeUp}>
          <FaLocationDot className="text-white text-xl mr-2" />
          <p className="text-white text-xl">Salem, Tamil Nadu</p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-6 mb-8"
          variants={fadeUp}
        >
          <p className="flex items-center text-white text-xl">Checkout My Profiles :</p>

          {[leetcode, gfg, hackerrank, github, linkedin].map((icon, i) => (
            <motion.a
              key={i}
              href={
                [
                  "https://leetcode.com/u/VIGNESHWARAN-M",
                  "https://www.geeksforgeeks.org/user/vigneshwai7zj",
                  "https://www.hackerrank.com/profile/vigneshwaran_co2",
                  "https://github.com/VIGNESHWARAN-USER",
                  "https://www.linkedin.com/in/vigneshwaran-developer"
                ][i]
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={icon} alt={`icon-${i}`} className="w-10 sm:w-12 rounded-lg p-2" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Aboutme;
