'use client'
import React from "react";

const skills = [
  { name: "HTML/CSS", value: 95 },
  { name: "JavaScript", value: 90 },
  { name: "React JS", value: 70 },

  { name: "Node JS", value: 60 },
  { name: "Devops", value: 30 },
  { name: "Linux", value: 85 },
];

const Skills = () => {
  return (
    <section className="text-white py-16 px-4 sm:px-8 md:px-23">
      <p className="text-gray-400 text-sm mb-2">My level of knowledge in some tools</p>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10">My Skills</h2>

      <div className="grid md:grid-cols-2 gap-x-20 gap-y-13">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="font-bold text-gray-400">{skill.name}</span>
              <span className="font-bold text-gray-400">{skill.value}%</span>
            </div>
            <div className="w-full h-2 bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-green-500 transition-all duration-500"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
