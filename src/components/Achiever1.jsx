import React from 'react'
import ds from "../assets/achiever1.png"

const Achiever1 = () => {
  return (
    <div className='w-full h-full flex flex-wrap md:flex-nowrap relative bg-gradient-to-br from-pink-600 to-blue-600'>
       <img src={ds} alt="" className=' w-[90%] h-[450px] md:w-1/2 m-4 rounded-lg'/>
       <div className='w-full md:w-1/2 p-2'>
            <h1 className='text-[#C9D1D9] mt-4 font-bold text-[35px]'>Achiever Award 2024</h1>
            <p className='text-[#C9D1D9] mt-2 text-[15px]'>
  I was honored with the KIOT Achievers Award for earning prestigious NPTEL certifications in my second year. I secured an Elite + Gold certificate in The Joy of Computing using Python and an Elite + Silver certificate in Problem Solving through Programming in C. These certifications reflect my strong understanding of programming fundamentals and the ability to apply them in real-world scenarios. This recognition showcases my commitment to academic excellence and my drive for continuous learning in core computing domains.
</p>

       </div>
    </div>
  )
}

export default Achiever1