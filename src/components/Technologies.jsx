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

const techStack = [
  { logo: reactlogo, name: "React" },
  { logo: node, name: "Node" },
  { logo: express, name: "Express" },
  { logo: django, name: "Django" },
  { logo: springboot, name: "Springboot" },
  { logo: tailwind, name: "Tailwind" },
  { logo: streamlit, name: "Streamlit" },
  { logo: c, name: "C" },
  { logo: java, name: "Java" },
  { logo: python, name: "Python" }
];

const Technologies = () => {
  return (
    <div className="overflow-hidden relative bg-[#0d1117] py-10 lg:mx-96 px-4 sm:px-8">
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
        <div className="flex animate-infinite-scroll gap-2 sm:gap-2">
          {[...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="min-w-[150px] shrink-0 flex flex-col items-center justify-center text-white"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="w-12 h-12 object-contain mb-2"
              />
              <p className="text-sm sm:text-base">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
