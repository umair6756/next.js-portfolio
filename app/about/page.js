"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Services from "./Services";
import Testimonials from "./Testimonials";
import PricingPlans from "./PricingPlans";

export default function Page() {
  return (
    <>
    <section className="w-full min-h-screen text-white py-16 px-6 md:px-16 lg:px-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <div className="relative w-20 mx-auto mt-3">
          {/* Large line */}
          <div className="h-1 bg-green-500 w-full"></div>

          {/* Small line moving inside the large line */}
          <motion.div
            animate={{
              x: ["0px", "80px"], // Moving from left to right across the full width of the green line
            }}
            transition={{
              duration: 4, // Duration of one cycle
              repeat: Infinity, // Loop infinitely
              repeatType: "loop", // Continuous loop
              ease: "linear", // Smooth, continuous movement
            }}
            className="absolute top-0 left-0 h-1 bg-green-500 w-2 border-l-2 border-r-2 border-black" // Small 1px wide line (car)
          />
        </div>
      </div>
      {/* Large Screens */}
      <div className=" lg:flex items-center gap-14 ">
        <div className="flex justify-center items-center lg:block">
          <div className="relative overflow-hidden border-2 border-black w-40 h-40 rounded-full md:w-[350px] md:h-[450px] md:rounded-none lg:w-[350px] lg:h-[450px] lg:rounded-none">
            <Image
              src="/images/bg.jpg"
              alt="Emma Smith"
              layout="fill"
              objectFit="cover"
              className="p-1 rounded-full md:rounded-none lg:rounded-none"
            />
          </div>
        </div>

        <div className="text-left max-w-2xl w-full md:w-full lg:w-[55%] my-8 lg:my-0">
          <h3 className="text-green-400 text-xl font-semibold mb-4">
            Who am I?
          </h3>
          <h2 className="text-3xl font-bold mb-4 opacity-85">
            I'm Emma Smith, a visual UX/UI Designer and Web Developer
          </h2>
          <p className="text-gray-500 mb-4">
            I am a freelancer based in the United Kingdom and I have been
            building noteworthy UX/UI designs and websites for years, which
            comply with the latest design trends. I help convert a vision and an
            idea into meaningful and useful products. Having a sharp eye for
            product evolution helps me prioritize tasks, iterate fast and
            deliver faster.
          </p>

          <div className="border-b-1 border-gray-800 w-full my-9"></div>

          {/* Info Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm mb-6">
            <p>
              <span className="font-semibold mr-2">Name :</span>
              <span className="text-gray-500">Hafiz Umair</span>
            </p>
            <p>
              <span className="font-semibold mr-2">Email :</span>
              <span className="text-gray-500">chumair6756@gmail.com</span>
            </p>
            <p>
              <span className="font-semibold mr-2">Age :</span>
              <span className="text-gray-500">19</span>
            </p>
            <p>
              <span className="font-semibold mr-2">From :</span>
              <span className="text-gray-500">Kasur, Pakistan</span>
            </p>
          </div>

          {/* Button + Divider + Icons */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-9 mt-6 text-lg">
            {/* CV Button */}
            <div>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-full">
                Download CV
              </button>
            </div>

            {/* Divider (Hidden on xs) */}
            <div className="hidden sm:flex justify-center items-center">
              <div className="border-t-4 w-20 border-gray-500"></div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5">
              <FaTwitter className="hover:text-green-400 cursor-pointer" />
              <FaLinkedinIn className="hover:text-green-400 cursor-pointer" />
              <FaFacebookF className="hover:text-green-400 cursor-pointer" />
              <FaInstagram className="hover:text-green-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>

<main>
  <Services/>

</main>

<Testimonials/>
<PricingPlans/>
    </>
    
  );
};

// export default About;
