import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message: msg,
    };

    emailjs.send('service_q85qnco', 'template_swzs3i5', templateParams, 'Z31nzPiNLjJ2MEbn4')
      .then((response) => {
        setSuccessMessage('Message sent successfully!');
        setErrorMessage('');
        setName('');
        setEmail('');
        setMsg('');
      })
      .catch((error) => {
        setErrorMessage('Failed to send message.');
        setSuccessMessage('');
      });
  };

  return (
    <div className='mx-auto bg-gray-700 text-white ms-4 p-8 rounded-xl shadow-lg mt-8 md:w-4/6 w-full me-5'>
      <h2 className='text-yellow-400 text-2xl mb-4'>Contact Me</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-sm font-semibold mb-1'>Name</label>
          <input
            id='name'
            type='text'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name'
            className='p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='email' className='text-sm font-semibold mb-1'>Email</label>
          <input
            id='email'
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter Your Email'
            className='p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='message' className='text-sm font-semibold mb-1'>Message</label>
          <textarea
            id='message'
            required
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder='Enter Your Message'
            rows='4'
            className='p-2 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400'
          />
        </div>
        <button
          type='submit'
          className='px-2 py-3 bg-yellow-400 text-gray-800 font-bold rounded-md hover:bg-yellow-500 transition duration-300'
        >
          Send Message
        </button>
        {successMessage && <p className='text-green-400 mt-4'>{successMessage}</p>}
        {errorMessage && <p className='text-red-400 mt-4'>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Contact;
