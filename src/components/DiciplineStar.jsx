import React from 'react'
import ds from "../assets/DisciplineStar.jpg"

const DisciplineStar = () => {
  return (
    <div className='w-full h-full flex flex-wrap md:flex-nowrap relative bg-gradient-to-br from-pink-600 to-blue-600'>
       <img src={ds} alt="" className=' w-[90%] h-[450px] md:w-1/2 m-4 rounded-lg'/>
       <div className='w-full md:w-1/2 p-2'>
            <h1 className='text-[#C9D1D9] mt-4 font-bold text-[35px]'>NPTEL Discipline Star</h1>
            <p className='text-[#C9D1D9] mt-2 text-[15px]'>
  I received the <strong>NPTEL Discipline Star Certificate</strong> for completing five courses in the programming and data science domain. This award highlights consistent academic excellence. The courses completed include:
  <ul className='list-disc ml-5 mt-2'>
    <li>The Joy of Computing Using Python</li>
    <li>Problem Solving Through Programming in C</li>
    <li>Data Analytics with Python</li>
    <li>Industry 4.0 and Industrial Internet of Things</li>
    <li>Privacy and Security in Online Social Media</li>
  </ul>
  <br />
  These certifications strengthened my skills in programming, analytics, and emerging tech—showcasing my dedication to continuous learning.
</p>

       </div>
    </div>
  )
}

export default DisciplineStar