"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function BackgroundText() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({
        x: (event.clientX - window.innerWidth / 2) * 0.02,
        y: (event.clientY - window.innerHeight / 2) * 0.02,
      });
    };

    if (window) window.addEventListener("mousemove", handleMouseMove);

    return () => {
      if (window) window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {[1, 2, 3].map((level) => (
        <motion.div
          key={level}
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{
            scale: 1,
            scaleY: 1.2,
            opacity: 0.2,
          }}
          transition={{ delay: 2 + level * 0.2 }}
          className={`absolute text-white inset-x-0 bottom-0 text-huge-${level} w-full text-center opacity-20 pointer-events-none`}
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
        >
          HACKBYTE
        </motion.div>
      ))}
    </>
  );
}
