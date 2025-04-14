'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import CloseButton from '../CloseButton';
import HeadingAnimation from '../HeadingAnimation';
import Link from 'next/link';

const projects = [
  { id: 1, category: 'HTML/CSS', img: '/images/bmi.jpg', label: 'BMI Calculator',  github: 'https://github.com/umair6756/BMI.git' },
  { id: 2, category: 'HTML/CSS', img: '/images/notes.jpg', label: 'Notes app', github: 'https://github.com/umair6756/Notes-app.git' },
  { id: 3, category: 'HTML/CSS', img: '/images/age.jpg', label: 'Age calculator', github: 'https://github.com/umair6756/Age-Calculator.git' },
  { id: 4, category: 'React', img: '/images/e-commerce.jpg', label: 'E-commerce store', github: 'https://github.com/umair6756/MERN-Stack-Ecommerce.git' },
  { id: 5, category: 'React', img: '/images/expense.jpg', label: 'Expense tracker', github: 'https://github.com/umair6756/MERN-Expense-tracker.git' },
  { id: 6, category: 'Photos', img: '/img/item-6.jpg', label: 'Pouch Design', github: '' },
];

const categories = ['All', 'HTML/CSS', 'React', 'Next JS'];

export default function PortfolioGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen py-10 px-10 md:px-25 lg:px-35 text-white">
         <HeadingAnimation heading="Portfolio" description="Showcasing some of my best work"/>

      <CloseButton/>
      <div className="flex justify-center space-x-6 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-lg font-semibold transition-all border-b-2 pb-1 ${
              activeCategory === cat ? 'border-green-500 text-green-500' : 'border-transparent'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative group cursor-pointer justify-center">
            <div className='w-[300px] h-[400px] relative overflow-hidden'>
            <Image
              src={project.img}
              alt={project.label}
            
              fill
              className="object-cover" 
            />
            </div>
            <div className="w-75 bg-black absolute inset-0 bg-[#222] bg-opacity-80 opacity-0 group-hover:opacity-50 transition duration-300 flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-2">{project.label}</h3>
              <Link href={project.github}>
              <span className="text-green-500 hover:underline">More Info</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
