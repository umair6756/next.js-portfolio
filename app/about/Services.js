'use client'

import { FaCss3Alt, FaGithub, FaDocker, FaLinux, FaShoppingCart } from 'react-icons/fa';


import {  TbLayersIntersect } from 'react-icons/tb';

const services = [
  {
    icon: <FaCss3Alt size={40} className="text-green-400" />,
    title: 'Web Design',
    desc: 'Designing clean, modern, and user-friendly website interfaces that enhance user experience.',
  },
  {
    icon: <TbLayersIntersect size={40} className="text-green-400" />,
    title: 'Full-Stack',
    desc: 'Building complete web applications, including both frontend and backend systems.',
  },
  {
    icon: <FaShoppingCart size={40} className="text-green-400" />,
    title: 'E-commerce Solutions',
    desc: 'Providing end-to-end e-commerce solutions for seamless online shopping experiences.',
  },
  {
    icon: <FaGithub size={40} className="text-green-400" />,
    title: 'CI/CD',
    desc: 'Automatically building, testing, and deploying software.',
  },
  {
    icon: <FaDocker size={40} className="text-green-400" />,
    title: 'Docker Services',
    desc: 'Managing scalable containerized infrastructure with Docker.',
  },
  {
    icon: <FaLinux size={40} className="text-green-400" />,
    title: 'Linux Admin',
    desc: 'Maintaining and securing Linux servers for optimal performance and reliability.',
  },
];

const Services = () => {
  return (
    <section className="bg-[#212529] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto ">
        <p className="text-gray-400 uppercase">Services i offer to my clients</p>
        <h2 className="text-4xl font-bold mb-10 ">My Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#111111] p-8 hover:border-b-4 border-green-400 "
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
