'use client'

import React from "react";
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import HeadingAnimation from "../HeadingAnimation";
import CloseButton from "../CloseButton";

import { useState } from "react";
export default function Contact() {

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  // 👇 Common onChange handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message);
  };


  return (


    <>
    <div className="mt-20">
         <HeadingAnimation heading="Get in Touch" description="Feel free to contact me anytimes"/>
         <CloseButton/>
         </div>
    <div className="min-h-screen  text-white px-6 md:px-12 lg:px-20 flex flex-col md:flex-row gap-12 justify-center items-start">

      {/* Message Form */}
      <div className="w-full md:w-[60%]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Message Me</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name and Email */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Name */}
            <div className="relative group w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="w-full bg-[#111] text-white px-4 py-3 focus:outline-none"
              />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-focus-within:w-full"></span>
            </div>

            {/* Email */}
            <div className="relative group w-full md:w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={handleChange}
                className="w-full bg-[#111] text-white px-4 py-3 focus:outline-none"
              />
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-focus-within:w-full"></span>
            </div>
          </div>

          {/* Subject */}
          <div className="relative group w-full">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              className="w-full bg-[#111] text-white px-4 py-3 focus:outline-none"
            />
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-focus-within:w-full"></span>
          </div>

          {/* Message */}
          <div className="relative group w-full">
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              className="w-full bg-[#111] text-white px-4 py-3 h-32 focus:outline-none resize-none"
            ></textarea>
            <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-green-500 transition-all duration-300 group-focus-within:w-full"></span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-[40%]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Info</h2>
        <p className="text-gray-400 mb-6">
          Always available for freelance work if the right project comes along. Feel free to contact me!
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaUser className="text-green-500 mt-1" />
            <div>
              <p className="text-white font-bold">Name</p>
              <p className="text-gray-400">Hafiz umair</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-500 mt-1" />
            <div>
              <p className="text-white font-bold">Location</p>
              <p className="text-gray-400">Shahbaz Khan Road, Kasur, Punjab, Pakistan</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="text-green-500 mt-1" />
            <div>
              <p className="text-white font-bold">Call Me</p>
              <p className="text-gray-400">+92 3016827310</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-green-500 mt-1" />
            <div>
              <p className="text-white font-bold">Email Me</p>
              <p className="text-gray-400">chumair6756@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
  