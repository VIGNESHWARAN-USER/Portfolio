import React from 'react'
import cect from "../assets/cect.png"
import jsw from "../assets/jsw.png"
import matrimony from "../assets/matrimony.png"

const ProjectCard = ({ img, title, description }) => {
  return (
    <div className="bg-white/20 flex flex-col lg:flex-row items-center relative rounded-xl backdrop-blur-lg p-6 md:p-10 gap-6 md:gap-10 mb-20">
      <img src={img} alt={title} className="w-full lg:w-1/2 rounded-xl object-cover max-h-[250px]" />
      <div className="flex flex-col justify-between w-full lg:w-1/2">
        <h1 className="text-[#C9D1D9] font-bold text-[24px] md:text-[32px] mt-4 lg:mt-0">{title}</h1>
        <p className="text-[#C9D1D9] mt-2 text-[14px] md:text-[15px]">{description}</p>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <button className="bg-white rounded-lg px-4 py-2 text-[#0e1116] font-bold w-full md:w-1/2">Know More</button>
          <div className="flex flex-col w-full md:w-1/2 gap-2">
            <button className="bg-white rounded-lg px-4 py-2 text-[#0e1116] font-bold">Demo Link</button>
            <button className="bg-white rounded-lg px-4 py-2 text-[#0e1116] font-bold">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-24 relative bg-[#0e1116] overflow-hidden">
      <h1 className="text-[#C9D1D9] font-bold text-[32px] sm:text-[40px] md:text-[60px] mb-12">Projects</h1>

      {/* Gradient Backgrounds */}
      <div className="absolute -right-64 -top-52 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>
      <div className="absolute -left-64 bottom-[650px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>
      <div className="absolute -right-64 -bottom-52 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>

      <ProjectCard
        img={jsw}
        title="JSW OHC"
        description="JSW Occupational Health Center (OHC) Project is a comprehensive digital health management system designed for industrial employees. It streamlines the medical recordkeeping process by allowing seamless access and updates by multiple roles—nurse, doctor, admin, and pharmacist. The system ensures secure login-based access, enabling each role to perform tasks relevant to their responsibilities, such as scheduling checkups, prescribing medication, and maintaining employee health records. It enhances operational efficiency, reduces paperwork, and promotes proactive health monitoring."
      />

      <ProjectCard
        img={matrimony}
        title="Matrimony Site"
        description="Matrimonial Portal for Chennai Siddha Vidya Nilayam Trust is a custom-built web application designed to support matrimonial alliances within the trust’s community. The platform allows users to register and search for suitable matches among the approved members. Admin login ensures that all user profiles are reviewed and verified before going live. The site also includes a donation page and a landing section introducing the trust's vision and values."
      />

      <ProjectCard
        img={cect}
        title="CECT Portal"
        description="Credit Equivalence and Credit Transfer (CECT) Portal is a multi-login web application developed for intra-college use to manage credit transfers for students taking external courses like NPTEL. It supports different user roles—Student, Course Advisor (CA), Head of Department (HOD), CDDA, and Admin—each with specific access and responsibilities. This system ensures a streamlined, transparent, and efficient credit validation process."
      />
    </div>
  )
}

export default Projects
