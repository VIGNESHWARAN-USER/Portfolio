import React from 'react'
import ds from "../assets/achiever2.png"

const Achiever2 = () => {
  return (
    <div className='w-full h-full flex flex-wrap md:flex-nowrap relative bg-gradient-to-br from-pink-600 to-blue-600'>
       <img src={ds} alt="" className=' w-[90%] h-[450px] md:w-1/2 m-4 rounded-lg'/>
       <div className='w-full md:w-1/2 p-2'>
            <h1 className='text-[#C9D1D9] mt-4 font-bold text-[35px]'>Achiever Award 2025</h1>
            <p className='text-[#C9D1D9] mt-2 text-[15px]'>
 I received the KIOT Achievers Award for my impactful contribution to a real-time consultancy project during my third year of B.E. CSE. I was recognized for designing and developing the website “chennaisiddhavidhdhai.com,” which included an integrated matrimony module. This project, in collaboration with the Chennai Siddha Vidhai Abhyasa Nilaiya Arakkattalai, emphasized creating a user-friendly, secure, and functional web platform. Delivered under the guidance of faculty, the project demonstrated my technical capability and teamwork in delivering client-focused solutions.
</p>

       </div>
    </div>
  )
}

export default Achiever2