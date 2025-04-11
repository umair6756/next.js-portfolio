








'use client'




import { useEffect, useState } from 'react';
// import { Typed } from 'react-typed';
import { ReactTyped } from 'react-typed';

import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import Image from 'next/image';
export default function Page() {
  const [isClient, setIsClient] = useState(false);

  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the component only renders on the client side
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col relative">
    {/* Navbar */}
    <nav className="flex justify-between items-center px-6 md:px-10 py-6">
      <div className="text-green-500 font-bold text-2xl">Kitzu</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        <li className="hover:text-green-500 cursor-pointer">About</li>
        <li className="hover:text-green-500 cursor-pointer">Resume</li>
        <li className="hover:text-green-500 cursor-pointer">Portfolio</li>
        <li className="hover:text-green-500 cursor-pointer">Blog</li>
        <li className="hover:text-green-500 cursor-pointer">Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setNavOpen(!navOpen)}>
        {navOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu Slide-down */}
      <div
        className={`absolute top-20 left-0 w-full bg-black transition-all duration-500 ease-in-out z-50 ${
          navOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4 text-white font-medium">
          <li className="hover:text-green-500 cursor-pointer">About</li>
          <li className="hover:text-green-500 cursor-pointer">Resume</li>
          <li className="hover:text-green-500 cursor-pointer">Portfolio</li>
          <li className="hover:text-green-500 cursor-pointer">Blog</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>

    {/* Main Content */}
    <div className="flex flex-col items-center justify-center flex-1 text-center px-4">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Emma Smith</h1>
      <ReactTyped
        className="text-2xl md:text-3xl text-gray-300"
        strings={[
          "I’m a Bad Web Developer.",
          "I’m a Freelancer.",
          "I’m a Web Designer.",
        ]}
        typeSpeed={60}
        backSpeed={40}
        loop
      />
    </div>

    {/* Social Icons */}
    <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col gap-6 text-xl">
      <a href="#" className="hover:text-green-500"><FaTwitter /></a>
      <a href="#" className="hover:text-green-500"><FaFacebookF /></a>
      <a href="#" className="hover:text-green-500"><FaLinkedinIn /></a>
      <a href="#" className="hover:text-green-500"><FaGithub /></a>
      <a href="#" className="hover:text-green-500"><FaInstagram /></a>
    </div>

    {/* Mobile Social Icons */}
    <div className="md:hidden flex justify-center gap-6 text-xl py-4">
      <a href="#" className="hover:text-green-500"><FaTwitter /></a>
      <a href="#" className="hover:text-green-500"><FaFacebookF /></a>
      <a href="#" className="hover:text-green-500"><FaLinkedinIn /></a>
      <a href="#" className="hover:text-green-500"><FaGithub /></a>
      <a href="#" className="hover:text-green-500"><FaInstagram /></a>
    </div>
  </div>
  );
}















