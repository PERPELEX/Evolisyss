"use client";

import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const CursorAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="w-8 h-8" // Reduced size
      animate={{
        x: position.x - 16, // Adjust for center alignment (half the size of the circle)
        y: position.y - 16, // Adjust for center alignment
      }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 50,
      }}
    >
      <div
        className={twMerge(
          "w-8 h-8 rounded-full relative flex items-center justify-center border-2 border-fuchsia-500" // Added border
        )}
        style={{
          backgroundColor: "transparent", // Transparent center
        }}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
          className={twMerge(
            "absolute inset-0 rounded-full outline outline-[2px] outline-fuchsia-500/30 -outline-offset-[2px] border-[2px] border-transparent border-t-fuchsia-500"
          )}
        />
      </div>
    </motion.div>
  );
};
