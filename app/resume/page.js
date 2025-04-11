import React from "react";
import { FaPlay } from "react-icons/fa";

const educationData = [
  {
    title: "Computer Science",
    institute: "Cambridge University",
    duration: "2004 - 2007",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
  },
  {
    title: "Bachelor Degree",
    institute: "University of Tokyo",
    duration: "2008 - 2010",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
  },
  {
    title: "Master Degree",
    institute: "Harvard University",
    duration: "2012 - 2015",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
  }
];

const experienceData = [
  {
    title: "Software Engineer",
    company: "Adobe",
    duration: "2015 - 2017",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
  },
  {
    title: "Back-End Developer",
    company: "Google",
    duration: "2017 - 2018",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
  },
  {
    title: "UI/UX Designer",
    company: "Discord",
    duration: "2019 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae."
  }
];

export default function EducationExperience() {
  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-5 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Education */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Education</h2>
          <div className="space-y-10 border-l-2 border-green-500 pl-6">
            {educationData.map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[14px] top-1 w-[10px] h-[10px] bg-green-500 rotate-45"></div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.institute} / {item.duration}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h2 className="text-3xl font-bold mb-10">Experience</h2>
          <div className=" border-l-2 border-green-500 py-6 bg-[#161616]">
            {experienceData.map((item, index) => (
                <div key={index}>
                                  <div  className="  px-8 relative">
                {/* <div className="absolute -left-[14px] top-1 w-[10px] h-[10px] bg-green-500 rotate-45"></div> */}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-1 mb-2">{item.company} / {item.duration}</p>
                <p className="text-gray-400 text-sm">{item.description}</p>
                
              </div>
              {/* <div className={`${index === item.length - 1 ? 'mt-5 mb-0 border-b-2 border-gray-700 w-full' : ''}`} /> */}
              
              {index !== experienceData.length - 1 && (
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