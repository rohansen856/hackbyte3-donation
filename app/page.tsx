"use client"

import { BackgroundTriangles } from "@/components/background-triangles"
import { BackgroundTransition } from "@/components/background-transition"
import { BackgroundText } from "@/components/background-text"
import { X } from "lucide-react"
import { DetailsOverlay } from "@/components/overlay"
import { Button, buttonVariants } from "@/components/ui/button"

const leftNavItems = [
    {
        id: "l1",
        label: "About",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    About Hackbyte 3.0
                </h2>
                <p className="text-gray-700 leading-relaxed">
                    Join IIITDMJ&apos;s Programming Club for Hackbyte 3.0 in
                    April 2025! Following the success of Hackbyte 2.0 with{" "}
                    <span className="font-semibold">2400+ participants</span>{" "}
                    and a
                    <span className="font-semibold">
                        {" "}
                        Rs. 4,00,000 prize pool
                    </span>
                    , this sequel expands with new domains, workshops, and a
                    learning-centric format.
                </p>
            </div>
        ),
    },
    {
        id: "l2",
        label: "Stats",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Event Statistics
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            15+
                        </div>
                        <div className="text-sm text-gray-600">Partners</div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            1500+
                        </div>
                        <div className="text-sm text-gray-600">
                            Registered Participants
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            500+
                        </div>
                        <div className="text-sm text-gray-600">
                            In-person Participants
                        </div>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30 text-center">
                        <div className="text-3xl font-bold text-gray-800">
                            100+
                        </div>
                        <div className="text-sm text-gray-600">Volunteers</div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "l3",
        label: "Contact",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Contact Information
                </h2>
                <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                        <svg
                            className="w-5 h-5 mt-1 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <span className="text-gray-700">
                            IIITDM Jabalpur, Dumna Road, Jabalpur
                        </span>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            <div className="text-gray-700">
                                <div>Uttara Kamat: +91 9869261132</div>
                                <div>Akshay Behl: +91 9319674300</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-5 h-5 text-gray-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            <span className="text-gray-700">
                                theprogclub@iiitdmj.ac.in
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
]

const rightNavItems = [
    {
        id: "r1",
        label: "Benefits",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Partner Benefits
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Talent Recruitment
                        </h3>
                        <p className="text-sm text-gray-600">
                            Direct access to skilled tech talent
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Brand Awareness
                        </h3>
                        <p className="text-sm text-gray-600">
                            Enhanced visibility in tech community
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Product Development
                        </h3>
                        <p className="text-sm text-gray-600">
                            Innovative solutions to real problems
                        </p>
                    </div>
                    <div className="p-4 rounded-lg bg-white/30">
                        <h3 className="font-semibold text-gray-800 mb-2">
                            Community Outreach
                        </h3>
                        <p className="text-sm text-gray-600">
                            Connect with future tech leaders
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        id: "r2",
        label: "Support",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Support Hackbyte 3.0
                </h2>
                <div className="p-6 rounded-lg bg-white/30">
                    <p className="text-gray-700 leading-relaxed">
                        Boost Hackbyte 3.0&apos;s success by supporting us
                        financially! As a community-driven event, your monetary
                        contribution will help us unlock its full potential,
                        delivering a richer experience for all participants.
                    </p>
                </div>
            </div>
        ),
    },
    {
        id: "r3",
        label: "Vision",
        info: (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Our Vision
                </h2>
                <div className="p-6 rounded-lg bg-white/30 text-center">
                    <p className="text-xl font-medium text-gray-700 italic">
                        &quote;We think to innovate - Join us in making this
                        edition even greater than before!&quote;
                    </p>
                </div>
            </div>
        ),
    },
]

type OverlayProps = {
    isOpen: boolean
    onClose: () => void
    content: string
}

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function HackbyteBanner() {
    const [overlayContent, setOverlayContent] = useState<JSX.Element>()
    const [isOverlayOpen, setIsOverlayOpen] = useState(false)

    const handleNavItemClick = (item: { label: string; info: JSX.Element }) => {
        setOverlayContent(item.info)
        setIsOverlayOpen(true)
    }
    const [dots, setDots] = useState<{ x: number; y: number; delay: number }[]>(
        []
    )

    useEffect(() => {
        // Create a grid of dots
        const newDots = []
        const spacing = 40 // Space between dots
        const rows = Math.ceil(window.innerHeight / spacing)
        const cols = Math.ceil(window.innerWidth / spacing)

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                newDots.push({
                    x: j * spacing,
                    y: i * spacing,
                    delay: (i + j) * 0.1, // Creates a wave effect
                })
            }
        }
        setDots(newDots)
    }, [])

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* Animated dots background */}
            <div className="z-50 flex flex-col justify-between absolute h-full w-12 backdrop-blur-3xl left-0 top-0 bottom-0 border-r border-white/20 py-12 overflow-hidden">
                {leftNavItems.map((item) => (
                    <p
                        key={item.id}
                        className="-rotate-90 text-white font-bold text-lg cursor-pointer"
                        onClick={() => handleNavItemClick(item)}
                    >
                        {item.label}
                    </p>
                ))}
            </div>
            <div className="z-50 flex flex-col justify-between absolute h-full w-12 backdrop-blur-3xl right-0 top-0 bottom-0 border-l border-white/20 py-12 overflow-hidden">
                {rightNavItems.map((item) => (
                    <p
                        key={item.id}
                        className="rotate-90 text-white font-bold text-lg cursor-pointer"
                        onClick={() => handleNavItemClick(item)}
                    >
                        {item.label}
                    </p>
                ))}
            </div>
            <DetailsOverlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
                content={overlayContent}
            />
            {dots.map((dot, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-white/40 rounded-full" // Increased opacity from 20% to 40%
                    initial={{
                        x: dot.x,
                        y: dot.y,
                    }}
                    animate={{
                        y: [dot.y - 10, dot.y + 10, dot.y - 10],
                        opacity: [0.4, 0.7, 0.4], // Increased opacity range
                    }}
                    transition={{
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: dot.delay,
                        },
                        opacity: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: dot.delay,
                        },
                    }}
                />
            ))}

            <div className="container mx-auto px-4 py-12">
                {/* Title Animation */}
                <motion.h1
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl font-bold mb-12"
                >
                    Break the red tape
                </motion.h1>

                {/* Main Content Section */}
                <div className="relative">
                    {/* Red Banner with 10-degree tilt */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        className="absolute inset-0 bg-red-500 origin-left"
                        style={{
                            transform: "skew(-10deg) rotate(-10deg)", // Added 10-degree rotation
                            clipPath:
                                "polygon(0 0, 100% 0, 95% 100%, -5% 100%)", // Creates slanted edges
                        }}
                    />

                    <div className="relative z-10 py-20 flex flex-col items-center justify-center gap-8">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                type: "spring",
                                stiffness: 200,
                            }}
                            className="relative"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="bg-white p-6 rounded-xl shadow-2xl transform -rotate-3"
                            >
                                <h2 className="text-6xl font-black text-black tracking-tight">
                                    HACK
                                    <br />
                                    BYTE
                                    <span className="text-red-500">3.0</span>
                                </h2>
                            </motion.div>
                        </motion.div>

                        {/* Event Details Animation */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="text-center"
                        >
                            <h3 className="text-2xl font-medium">
                                Join us from{" "}
                                <span className="text-red-300">
                                    4th-6th April 2025
                                </span>
                            </h3>
                            <p className="mt-2 text-xl">
                                at IIITDM Jabalpur for hackathon
                            </p>
                        </motion.div>
                        <Link href={"https://milaap.org/fundraisers/support-student-community-2"} className={cn(buttonVariants({ className: "bg-white text-3xl text-black font-extrabold p-6 hover:bg-white/90" }))}>
                            Donate
                        </Link>
                    </div>
                </div>

                {/* Social Links */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex justify-center gap-6 mt-12"
                >
                    {["linkedin", "instagram", "twitter", "discord"].map(
                        (social) => (
                            <motion.a
                                key={social}
                                href={`#${social}`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <span className="capitalize">{social}</span>
                            </motion.a>
                        )
                    )}
                </motion.div>
            </div>
        </div>
    )
}
