"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";

export default function CloseButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
      className="fixed top-6 right-8 z-[10000] text-white hover:text-green-500 text-3xl md:text-4xl cursor-pointer"
    >
      <IoMdClose />
    </motion.button>
  );
}
