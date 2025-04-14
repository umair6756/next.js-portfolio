"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function TransitionEffect({ children }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1500); // Total animation time

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div
            key="overlay"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              duration: 1.2,
              ease: [0.85, 0, 0.15, 1],
            }}
            className="fixed top-0 left-0 w-full h-full bg-black z-[9999]"
          />
        )}
      </AnimatePresence>

      {/* Content fades in smoothly after transition */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isAnimating ? 0 : 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}
