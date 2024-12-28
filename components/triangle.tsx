"use client"

import { motion } from "framer-motion"
import { useState, useCallback } from "react"
import Image from "next/image"

type TriangleProps = React.HTMLAttributes<HTMLDivElement> & {
    glowColor: string
    onHover: (isHovered: boolean) => void
}

export function Triangle({
    className,
    glowColor,
    onHover,
    ...props
}: TriangleProps) {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = useCallback(
        (hovered: boolean) => {
            setIsHovered(hovered)
            onHover(hovered)
        },
        [onHover]
    )

    return (
        <motion.div
            className={`p-6 rounded-full flex items-center justify-center size-[400px] ${className} opacity-20 animate-in relative group cursor-pointer`}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            whileHover={{ scale: 1.05 }}
        >
            <div className="relative flex items-center justify-center">
                <svg
                    fill={isHovered ? glowColor : "#000000"}
                    viewBox="0 0 500 500"
                    className="h-[350px] w-[350px] -mb-[110px] transition-colors duration-300"
                >
                    <polygon points="245,456.701 490,33.299 0,33.299" />
                </svg>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
                    <div className="relative w-[150px] h-[150px]">
                        {!isHovered && (
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                fill
                                className="object-contain"
                                style={{
                                    filter: isHovered
                                        ? "brightness(1.2)"
                                        : "brightness(1)",
                                    transition: "filter 0.3s ease-in-out",
                                }}
                            />
                        )}
                    </div>
                </div>
            </div>

            <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: `radial-gradient(circle, ${glowColor} 0%, rgba(255,255,255,0) 70%)`,
                    filter: "blur(20px)",
                }}
            ></motion.div>
        </motion.div>
    )
}
