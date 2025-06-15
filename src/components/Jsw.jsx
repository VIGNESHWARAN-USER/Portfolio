import React from 'react'
import jsw from "../assets/jsw.png"

const Jsw = () => {
  return (
    <div className='w-full h-full flex relative bg-gradient-to-br from-pink-600 to-blue-600'>
       <img src={jsw} alt="" className='w-1/2 m-4 rounded-lg'/>
       <div>
            <h1 className='text-[#C9D1D9] mt-4 font-bold text-[35px]'>Industrial Project</h1>
            <p className='text-[#C9D1D9] mt-2 font- text-[15px]'>JSW Occupational Health Center (OHC) Project is a comprehensive digital health management system designed for industrial employees. It streamlines the medical recordkeeping process by allowing seamless access and updates by multiple roles—nurse, doctor, admin, and pharmacist. The system ensures secure login-based access, enabling each role to perform tasks relevant to their responsibilities, such as scheduling checkups, prescribing medication, and maintaining employee health records. It enhances operational efficiency, reduces paperwork, and promotes proactive health monitoring. Built with scalability and user-friendliness in mind, it supports better healthcare decision-making within the organization.</p>
       </div>
    </div>
  )
}

export default Jsw