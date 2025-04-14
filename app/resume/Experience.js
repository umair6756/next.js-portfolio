'use client'

import React from "react";
import { FaPlay } from "react-icons/fa";
import HeadingAnimation from "../HeadingAnimation";
import CloseButton from "../CloseButton";

const educationData = [
  {
    title: "Matric",
    institute: "Quaid Public School",
    duration: "2020 - 2022",
    description: "Matric in Science with A+ grade, demonstrating strong foundational knowledge in science and mathematics."
  },
  {
    title: "Intermediate",
    institute: "Kips College",
    duration: "2022 - 2024",
    description: "Completed Intermediate in Computer Science (ICS) with an A+ grade, demonstrating strong proficiency in technology."
  },
  {
    title: "Bachelor Degree",
    institute: "Virtual University",
    duration: "2024 - 2028",
    description: "Pursuing a Bachelor's degree in Data Science, focusing on data analysis, machine learning, and statistical modeling."
  }

];

const certificationData = [
  {
    title: "Full Stack Web Development",
    provider: "Expert-B",
    duration: "2023 - 2024",
    description: "Comprehensive training in both front-end and back-end development using modern technologies like React, Node.js and others "
  },
  {
    title: "Linux Administration",
    provider: "Alnafi",
    duration: "2024 - 2025",
    description: "In-depth learning of Linux server management, system configurations, and security practices to ensure stable and secure environments."
  },
  {
    title: "DevOps",
    provider: "Alnafi",
    duration: "2025 - 2026",
    description: "Focused on continuous integration, deployment, and automating workflows for efficient software development and infrastructure."
  }
]


const Experience = () => {
  return (

    
    <section className=" min-h-screen text-white py-20 px-4 sm:px-8 md:px-16">
      <HeadingAnimation heading="Resume" description="Check out my resume"/>
      <CloseButton/>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Education</h2>
          <div className="border-l-2 border-green-500 py-6 bg-[#161616]">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
              <div  className="  px-10 ">
                {/* <div className="absolute -left-[14px] top-1 w-[10px] h-[10px] bg-green-500 rotate-45"></div> */}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="absolute top-2 left-0 bg-green-500 px-3 py-[6.5] text-xs text-black font-semibold clip-path-ribbon">

</div>
                <p className="text-gray-400 text-sm mt-1 mb-2">{item.institute} / {item.duration}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

                            
{index !== educationData.length - 1 && (
  <div className="border-b-1  border-gray-500 w-full my-8"></div> 
  
  // Customizable border - here, it's dashed with blue color
)}

</div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Certifications</h2>
          <div className=" border-l-2 border-green-500 py-6 bg-[#161616]">
            {certificationData.map((item, index) => (
                <div className="relative" key={index}>
                                  <div  className="  px-10 ">
                {/* <div className="absolute -left-[14px] top-1 w-[10px] h-[10px] bg-green-500 rotate-45"></div> */}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <div className="absolute top-2 left-0 bg-green-500 px-3 py-[6.5] text-xs text-black font-semibold clip-path-ribbon">

  </div>
                <p className="text-gray-400 text-sm mt-1 mb-2">{item.provider} / {item.duration}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
                
              </div>
              {/* <div className={`${index === item.length - 1 ? 'mt-5 mb-0 border-b-2 border-gray-700 w-full' : ''}`} /> */}
              
              {index !== certificationData.length - 1 && (
      <div className="border-b-1  border-gray-500 w-full my-8"></div> 
      
      // Customizable border - here, it's dashed with blue color
    )}

  
                </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience