"use client";
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_81g1wcj',    
        'template_t8rujrd',    
        form.current,
        'TZTv4WZEvEogaF0U5'     
      );
      
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="z-9 relative">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll
          try my best to get back to you!
        </p> 
        <div className="socials flex flex-row gap-2 mb-15">
          <Link href="https://github.com/arshaikh13">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/areeb-shaikh02/">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </div>
      
      <div className="z-10 relative">
        {submitStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
            <p className="text-green-300 text-sm font-medium">
              ✅ Message sent successfully! I'll get back to you soon.
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-sm font-medium">
              ❌ Failed to send message. Please try again or contact me directly.
            </p>
          </div>
        )}

        <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="user_email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="user_email"
              type="email"
              id="user_email"
              required
              className="bg-[#18191E] border border-cyan-700 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              placeholder="email@example.com"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-cyan-700 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              placeholder="What's this about?"
              disabled={isSubmitting}
            />
          </div>
          
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="6"
              className="bg-[#18191E] border border-cyan-700 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-vertical"
              placeholder="Your message here..."
              disabled={isSubmitting}
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`font-medium py-2.5 px-5 rounded-lg w-full transition-all duration-300 ${
              isSubmitting 
                ? 'bg-gray-600 cursor-not-allowed text-gray-400'
                : 'bg-cyan-700 hover:bg-cyan-600 text-white hover:text-[#18191E] cursor-pointer hover:shadow-lg hover:shadow-gray-500/25'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </div>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;