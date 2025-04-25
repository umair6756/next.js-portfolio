"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Image from 'next/image'

const allTestimonials = [
  {
    name: "Julia Sakura",
    title: "Envato Customer",
    feedback:
      "Emma did an excellent creative job, addressing our request quickly, and also providing her own graphic insight. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Santana",
    title: "Entrepreneur",
    feedback:
      "Emma worked with us the entire way. Open to feedback and changes when needed. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Alice Monroe",
    title: "UX Designer",
    feedback:
      "Very professional and creative! She understands design and functionality extremely well.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Kim",
    title: "Startup Founder",
    feedback:
      "Amazing collaboration! She delivered top-notch results. 10/10 would hire again.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0); // 0 or 1
  const visibleTestimonials = allTestimonials.slice(index * 2, index * 2 + 2);

  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-6xl mx-auto ">
        <p className="text-lg text-zinc-400 mb-2">
          What my clients think about me
        </p>
        <h2 className="text-4xl font-bold mb-14 text-white">Testimonials</h2>

        <div className="grid md:grid-cols-2 gap-10 mb-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            {visibleTestimonials.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-zinc-900/70 px-10 py-3 shadow-lg border border-zinc-800 text-left relative flex flex-col"
              >
                {/* Client Info */}
                <div className="flex gap-4 mb-0">
                  <div className="flex gap-4 mt-8">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={500}
                      width={500}
                      className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-semibold text-white">
                        {item.name}
                      </p>
                      <p className="text-sm text-zinc-400">{item.title}</p>
                    </div>
                  </div>
                  <div className="ml-auto ">
                    <span
                      className="ml-auto text-green-500 opacity-70"
                      style={{ fontSize: "7rem" }}
                    >
                      &rdquo;
                    </span>
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-zinc-300 leading-relaxed">{item.feedback}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dot Buttons */}
        <div className="flex justify-center gap-4">
          {[0, 1].map((i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === i ? "bg-green-500 scale-125 shadow-xl" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
