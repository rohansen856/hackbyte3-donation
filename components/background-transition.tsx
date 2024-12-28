"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = ["#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

export function BackgroundTransition() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 opacity-10"
      animate={{ backgroundColor: colors[colorIndex] }}
      transition={{ duration: 10 }}
    />
  );
}
