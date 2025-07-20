import React from 'react'
import cect from "../assets/cect.png"
import jsw from "../assets/jsw.png"
import matrimony from "../assets/matrimony.png"
import moodle from "../assets/Moodle.png"
import placement from "../assets/placementportal.png"
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const ProjectCard = ({ img, title, description, github, demo, tech }) => {

  
  return (
    <div className="bg-white/20 flex flex-col mx-[10%] lg:flex-row items-center relative rounded-xl backdrop-blur-lg p-6 md:p-10 gap-6 md:gap-10 mb-20">
      <img src={img} alt={title} className="w-full lg:w-1/2 rounded-xl object-cover max-h-[340px]" />
      <div className="flex flex-col justify-between w-full lg:w-1/2">
        <h1 className="text-[#C9D1D9] font-bold text-[24px] md:text-[32px] mt-4 lg:mt-0">{title}</h1>
        <div className="flex flex-wrap gap-2 my-2">
          {tech.map((val, index) => (
            <span
              key={index}
              className="bg-[#ffffff33] border-2 text-white px-4 py-2 rounded-md text-sm"
            >
              {val}
            </span>
          ))}
        </div>
        <p className="text-[#C9D1D9] mt-2 text-[14px] md:text-[15px]">{description}</p>
        <div className="mt-4 flex flex-col md:flex-row gap-4">
          <div className="flex w-full  gap-2">
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-1/2 flex justify-center items-center gap-2 rounded-lg px-4 py-2 text-[#0e1116] font-bold"
            >
              <FaExternalLinkAlt />
              Demo Link
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-1/2 flex justify-center items-center gap-2 rounded-lg px-4 py-2 text-[#0e1116] font-bold"
            >
              <FaGithub />
              GitHub
            </a>
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
        github="https://github.com/VIGNESHWARAN-USER/Occupational-Health-Center"
        demo="https://jswohc.netlify.app/"
        tech={["React", "Django", "MySQL"]}
        img={jsw}
        title="JSW OHC"
        description="JSW Occupational Health Center (OHC) Project is a comprehensive digital health management system designed for industrial employees. It streamlines the medical recordkeeping process by allowing seamless access and updates by multiple roles—nurse, doctor, admin, and pharmacist. The system ensures secure login-based access, enabling each role to perform tasks relevant to their responsibilities, such as scheduling checkups, prescribing medication, and maintaining employee health records. It enhances operational efficiency, reduces paperwork, and promotes proactive health monitoring."
      />

      <ProjectCard
        github="https://github.com/VIGNESHWARAN-USER/Matrimony-v2.0"
        demo="https://chennaisiddhaviddhai.com/"
        tech={["React", "Node", "MongoDB"]}
        img={matrimony}
        title="Matrimony Site"
        description="Matrimonial Portal for Chennai Siddha Vidya Nilayam Trust is a custom-built web application designed to support matrimonial alliances within the trust’s community. The platform allows users to register and search for suitable matches among the approved members. Admin login ensures that all user profiles are reviewed and verified before going live. The site also includes a donation page and a landing section introducing the trust's vision and values."
      />

      <ProjectCard
        github="https://github.com/VIGNESHWARAN-USER/CECT-Springboot"
        demo="https://cect.netlify.app/"
        tech={["React", "Springboot", "MongoDB"]}
        img={cect}
        title="CECT Portal"
        description="Credit Equivalence and Credit Transfer (CECT) Portal is a multi-login web application developed for intra-college use to manage credit transfers for students taking external courses like NPTEL. It supports different user roles—Student, Course Advisor (CA), Head of Department (HOD), CDDA, and Admin—each with specific access and responsibilities. This system ensures a streamlined, transparent, and efficient credit validation process."
      />

      <ProjectCard
        github="https://github.com/VIGNESHWARAN-USER/Moodle-Springboot"
        demo=""
        tech={["React", "Springboot", "MongoDB"]}
        img={moodle}
        title="Moodle"
        description="Learning Management Portal is a multi-login web application inspired by the Moodle classroom system, developed with additional features tailored to client-specific requirements. The platform supports Admin, Faculty, and Student roles. Admins can onboard faculty members, enabling them to log in and upload subject-specific notes and learning materials. Students can access these resources seamlessly, enhancing their academic experience. A key feature is faculty insight into student engagement, allowing them to track note impressions and interactions. This system offers a modern, scalable solution for digital learning within the institution."
      />

      <ProjectCard
        github="https://github.com/VIGNESHWARAN-USER/Placement-Portal"
        demo=""
        tech={["React", "Node", "MongoDB"]}
        img={placement}
        title="Placement Portal"
        description="Placement Portal is a multi-login web application designed for managing campus recruitment activities efficiently. It features dedicated access for both Students and Admin, with the Admin empowered to post details of current and upcoming company drives, manage student access, and monitor participation. Students can view company listings, track upcoming opportunities, and stay informed about placement activities. The portal also includes performance analytics—both individual and group-wise—to provide insights into student engagement and outcomes in recruitment processes. This system ensures a centralized, transparent, and organized approach to college placements."
      />
    </div>
  )
}

export default Projects
