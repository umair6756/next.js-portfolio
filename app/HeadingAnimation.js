import React from 'react'
import { motion } from "framer-motion";

const HeadingAnimation = ({heading, description}) => {
  return (
    <div>
              <div className="text-center mb-16">
                <p className='mb-4 text-gray-400'>{description}</p>
        <h2 className="text-4xl md:text-5xl font-bold">{heading}</h2>
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
    </div>
  )
}

export default HeadingAnimation