'use client'

import { FaCss3Alt, FaWordpressSimple, FaRocket } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

import { TbArrowsDiagonal } from 'react-icons/tb';

const services = [
  {
    icon: <FaCss3Alt size={40} className="text-green-400" />,
    title: 'Design Trends',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    icon: <MdOutlineDesignServices size={40} className="text-green-400" />,
    title: 'PSD Design',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    // icon: <IoMdSupport size={40} className="text-green-400" />,
    title: 'Customer Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    icon: <FaWordpressSimple size={40} className="text-green-400" />,
    title: 'Web Development',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    icon: <TbArrowsDiagonal size={40} className="text-green-400" />,
    title: 'Fully Responsive',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    icon: <FaRocket size={40} className="text-green-400" />,
    title: 'Branding',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
];

const Services = () => {
  return (
    <section className="text-white py-16 px-6">
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
