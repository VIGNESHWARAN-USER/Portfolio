import React from 'react'
import matrimony from "../assets/matrimony.png"

const Matrimony = () => {
  return (
    <div className='w-full h-full flex relative bg-gradient-to-br from-pink-600 to-blue-600'>
       <img src={matrimony} alt="" className='w-1/2 m-4 rounded-lg'/>
       <div>
            <h1 className='text-[#C9D1D9] mt-4 font-bold text-[35px]'>Consultancy Project</h1>
            <p className='text-[#C9D1D9] mt-2 font- text-[15px]'>
                    Matrimonial Portal for Chennai Siddha Vidya Nilayam Trust is a custom-built web application designed to support matrimonial alliances within the trust’s community. The platform allows users to register and search for suitable matches among the approved members. Admin login ensures that all user profiles are reviewed and verified before going live. The site also includes a donation page to support trust activities, and an informative landing section that introduces visitors to the trust's vision and values. This system fosters secure, culturally aligned matchmaking while also serving as a digital face of the organization.
            </p>
        </div>
    </div>
  )
}

export default Matrimony