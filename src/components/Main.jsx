import React from 'react';
import Header from './header';
import Technologies from './Technologies';

const Main = ({ contactref, projectref, experienceref }) => {
  return (
    <div>
      <Header
        contactref={contactref}
        projectref={projectref}
        experienceref={experienceref}
      />
      <div className="flex flex-col items-center justify-center px-4 sm:px-8">
        <p className="text-white pt-8 text-xl sm:text-2xl md:text-3xl text-center">
          Hey, I am <b>Vigneshwaran Muralidharan</b>
        </p>

        <h1 className="bg-gradient-to-r from-[#1F51FF] to-[#FF10F0] text-transparent bg-clip-text font-bold pt-6 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] text-center">
          Full Stack
        </h1>

        <p className="bg-gradient-to-r from-[#1F51FF] to-[#FF10F0] text-transparent bg-clip-text font-bold -mt-6 text-[44px] sm:text-[60px] md:text-[80px] lg:text-[100px] text-center">
          Developer&nbsp;
          <span className="text-[#B75C0C]">&lt;</span>
          <span className="text-[#0A3867]">/</span>
          <span className="text-[#B75C0C]">&gt;</span>
        </p>

        <div className="my-10 sm:my-16 text-white flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <hr className="h-0.5 w-32 sm:w-52 bg-white" />
          <p className="font-meddon text-base sm:text-lg md:text-xl text-center">
            Final&nbsp;&nbsp;Year&nbsp;&nbsp;Student
          </p>
          <hr className="h-0.5 w-32 sm:w-52 bg-white" />
        </div>
      </div>
      <Technologies />
    </div>
  );
};

export default Main;
