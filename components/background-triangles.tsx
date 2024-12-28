"use client";

import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Triangle } from "./triangle";
import { useCallback, useState } from "react";

const images = [
  "/hb_2/hb_1.jpg",
  "/hb_2/hb_2.jpg",
  "/hb_2/hb_3.jpg",
  "/hb_2/hb_4.jpg",
  "/hb_2/hb_5.jpg",
  "/hb_2/hb_6.jpg",
  "/hb_2/hb_7.jpg",
  "/hb_2/hb_8.jpg",
  "/hb_2/hb_9.jpg",
  "/hb_2/hb_10.jpg",
  "/hb_2/hb_11.jpg",
  "/hb_2/hb_12.jpg",
  "/hb_2/hb_13.jpg",
  "/hb_2/hb_14.jpg",
  "/hb_2/hb_15.jpg",
  "/hb_2/hb_16.jpg",
  "/hb_2/hb_17.jpg",
  "/hb_2/hb_18.jpg",
];

const colors = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#FFA07A",
  "#98D8C8",
  "#F06292",
  "#AED581",
  "#FFD54F",
  "#4DB6AC",
  "#7986CB",
];

export function BackgroundTriangles() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [previousImage, setPreviousImage] = useState<string | null>(null);

  const handleTriangleHover = useCallback(
    (isHovered: boolean) => {
      if (isHovered) {
        const newImage = images[Math.floor(Math.random() * images.length)];
        setPreviousImage(activeImage);
        setActiveImage(newImage);
      } else {
        setPreviousImage(activeImage);
        setActiveImage(null);
      }
    },
    [activeImage],
  );

  return (
    <>
      <AnimatePresence>
        {activeImage && (
          <motion.div
            key={activeImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeImage})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
        {previousImage && (
          <motion.div
            key={previousImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${previousImage})` }}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>
      <motion.div
        className="absolute w-[500vw] h-[120vh]"
        animate={{
          x: ["0%", "-50%", "0%"], // Horizontal movement
        }}
        transition={{
          duration: 400,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={cn("flex -ml-[500px] -space-x-[200px]", "-mt-[180px]")}
          >
            {Array.from({ length: 50 }).map((_, j) => (
              <Triangle
                key={j}
                className={cn((i + j) % 2 === 0 && "rotate-[60deg] mt-[105px]")}
                glowColor={colors[Math.floor(Math.random() * colors.length)]}
                onHover={handleTriangleHover}
              />
            ))}
          </div>
        ))}
      </motion.div>
    </>
  );
}
