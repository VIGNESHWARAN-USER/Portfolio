import React, { useState } from 'react';
import leetcode from "../assets/leetcode.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import gfg from "../assets/gfg.png";
import hackerrank from "../assets/hackerrank.png"

const Contactme = () => {

  const [result, setResult] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [message, setmessage] = useState("")
  const [name, setname] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = {name:name, phone:phone, email:email, message:message}

    formData.append("access_key", "fbdaf21b-af91-4178-9863-1b5bac982f04");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0e1116] overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute -left-60 -bottom-28 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-br from-[#FF10F0] via-purple-700 to-[#1F51FF] opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-white py-12 px-4 sm:px-8 md:px-24">
        <h1 className="text-[32px] sm:text-[40px] md:text-[60px] font-bold text-[#C9D1D9] text-center md:text-left">Contact Me</h1>
        <h2 className="text-[20px] sm:text-[28px] md:text-[35px] text-[#C9D1D9] text-center md:text-left mb-8">Let's Get In Touch</h2>

        <div className="flex flex-col md:items-start md:absolute md:top-28 md:right-44 w-full max-w-md md:max-w-lg mx-auto md:mx-0">
          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 mb-8">
            <p className='flex items-center'>CHECKOUT ME ON:</p>
            <a href="https://leetcode.com/u/VIGNESHWARAN-M" target="_blank" rel="noopener noreferrer">
              <img src={leetcode} alt="leetcode" className="w-10 sm:w-12 bg-white/20 backdrop-blur-xl rounded-lg p-2" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/vigneshwai7zj" target="_blank" rel="noopener noreferrer">
              <img src={gfg} alt="gfg" className="w-10 sm:w-12 bg-white/20 backdrop-blur-xl rounded-lg p-2" />
            </a>
            <a href="https://www.hackerrank.com/profile/vigneshwaran_co2" target="_blank" rel="noopener noreferrer">
              <img src={hackerrank} alt="hackerrank" className="w-10 sm:w-12 bg-white/20 backdrop-blur-xl rounded-lg p-2" />
            </a>
            <a href="https://github.com/VIGNESHWARAN-USER" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="w-10 sm:w-12 bg-white/20 backdrop-blur-xl rounded-lg p-2" />
            </a>
            <a href="https://www.linkedin.com/in/vigneshwaran-developer" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="w-10 sm:w-12 bg-white/20 backdrop-blur-xl rounded-lg p-2" />
            </a>
          </div>

          
          {/* Form Fields */}
          <div className='w-full'>
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label>Full Name</label>
              <input
                required
                type="text"
                placeholder="Enter full name"
                className="bg-[#162234] rounded-2xl px-4 py-2 w-full"
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <input
                required
                type="text"
                placeholder="Enter Email"
                className="bg-[#162234] rounded-2xl px-4 py-2 w-full"
                value={email}
                onChange={(e)=>{setemail(e.target.value)}}
              />
            </div>
            <div className="flex flex-col">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="bg-[#162234] rounded-2xl px-4 py-2 w-full"
                value={phone}
                onChange={(e)=>{setphone(e.target.value)}}
              />
            </div>
            <div className="flex flex-col">
              <label>Message</label>
              <textarea
                required
                placeholder="Enter Message"
                className="bg-[#162234] rounded-2xl px-4 py-2 w-full h-28"
                value={message}
                onChange={(e)=>{setmessage(e.target.value)}}
              />
            </div>
            <span className=''>{result}</span>
            <button type='submit' className="bg-[#1F51FF] mt-4 w-full px-4 py-2 rounded-xl hover:bg-[#012ECD] transition duration-300">
              Submit
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
