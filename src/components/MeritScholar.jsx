import React from 'react'
import ds from "../assets/meritScholar.jpg"

const MeritScholar = () => {
  return (
    <div className='w-full h-full flex flex-wrap md:flex-nowrap relative bg-gradient-to-br from-pink-600 to-blue-600'>
       <img src={ds} alt="" className=' w-[90%] h-[450px] md:w-1/2 m-4 rounded-lg'/>
       <div className='w-full md:w-1/2 p-2'>
            <h1 className='text-[#C9D1D9] mt-4 font-bold text-[35px]'>Merit Scholar</h1>
            <p className='text-[#C9D1D9] mt-2 text-[15px]'>
 I was awarded the KIOT Merit Scholarship for securing a high engineering cut-off score of 190 in the TNEA 2022 admissions. This scholarship, valued at ₹63,750 per year, was granted for my undergraduate B.E. CSE program based on academic merit. It recognizes my strong academic foundation and was issued for each year of study, supporting and motivating consistent performance throughout my degree.
</p>

       </div>
    </div>
  )
}

export default MeritScholar