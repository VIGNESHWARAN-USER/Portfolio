import React from 'react';
import reactlogo from "../assets/react.png";
import streamlit from "../assets/streamlit.png";
import django from "../assets/django.png";
import express from "../assets/express.png";
import springboot from "../assets/springboot.png";
import java from "../assets/java.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";

const techStack = [reactlogo, node, express, django, springboot, tailwind, streamlit, c, java, python];

const Technologies = () => {
  return (
    <div className="overflow-hidden relative bg-[#0d1117] py-10 lg:mx-96 px-4 sm:px-8">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <div className="flex animate-infinite-scroll gap-8 sm:gap-12">
          {[...techStack, ...techStack].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="tech-logo"
              className="w-10 sm:w-12 md:w-14 h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
