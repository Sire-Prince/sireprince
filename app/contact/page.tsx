'use client'

import React from 'react'
import { useState } from 'react';
import { 
  FadeUp, 
  FadeDown, 
  FadeLeft, 
  FadeRight, 

} from '../components/Reveal';


const contact = () => {



  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  async function handleSubmit(event:React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch('https://formspree.io/f/xqaozrnb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        (event.currentTarget).reset();
        
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  }


return (
    <div className='flex-row items-center justify-between w-full  bg-black/50 pb-20 sm:py-20 lg:px-12 '>
      <FadeDown>  <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
    Reach Out
          </h1>
       </FadeDown>
   <div className='w-full py-12 px-6 sm:py-18 sm:px-24 flex flex-col-reverse md:flex-row items-start justify-between gap-6'>


<div className='flex flex-col items-center md:items-start justify-between h-full w-full  md:w-[45%] px-8 gap-18 sm:gap-25 '>
  <FadeLeft>
  <h2 className='text-3xl sm:text-5xl text-center md:text-start leading-relaxed sm:leading-loose lg:leading-16 font-bold w-full'>
    Get in touch today and we'll get back to you within 24 hours.
  </h2>       
  </FadeLeft>
      <FadeUp>
  <div className='flex flex-col items-center sm:items-start text-center sm:text-center gap-8'>
 
    <h2 className='text-2xl font-bold'>Follow Our Socials</h2>
    <div className="flex items-center gap-6">
       <a target="_blank" href="https://www.facebook.com/share/17UH3buTEp/" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
       <a target="_blank"  href="https://www.tiktok.com/@sire_prince" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"/>
        </svg>
      </a>
  <a target="_blank" href="https://www.instagram.com/sire_prince_7/" className="hover:opacity-80 transition-opacity">
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
</a>
       <a target="_blank" href="https://www.linkedin.com/in/sire-prince-037a7a31b/" className="hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a> 
    </div>
     

  </div>
     </FadeUp>
</div>
    <div className="w-full sm:max-w-lg mx-auto bg-[#272727] p-6 rounded-lg">
              <FadeRight> <h3 className="text-2xl font-bold mb-6 text-white">Send me a message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name or Business name"
          required
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
        />
        
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email or Number"
            required
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
          />
          <input
            type="text"
            name="text"
            placeholder="Project type e.g website"
            required
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
          />
        </div>
        
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 resize-vertical text-white"
        />
        
        <button
          type="submit"
          className="w-[35%] bg-black/20 text-white py-3 rounded-lg font-medium hover:bg-black/60 transition-colors cursor-pointer"
        >
        {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form></FadeRight>

     

    </div>
   


    </div>
    </div>
  )
}

export default contact