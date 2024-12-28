"use client"

import { motion } from "framer-motion"
import { X } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type DetailsOverlayProps = {
    isOpen: boolean
    onClose: () => void
    content: React.ReactNode
}

export function DetailsOverlay({
    isOpen,
    onClose,
    content,
}: DetailsOverlayProps) {
    const backdropVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "100%" },
    }

    const cardVariants = {
        open: {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
        },
        closed: {
            y: "100%",
            opacity: 1,
            scale: 0.9,
            rotateX: -10,
        },
    }

    return (
        <motion.div
            className={cn("fixed inset-0 z-30")}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={backdropVariants}
            transition={{ duration: 0.3 }}
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/10 backdrop-blur-md" />

            <div className="relative h-full w-full flex items-center justify-center p-4">
                <motion.div
                    variants={cardVariants}
                    transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                    }}
                    className="w-full max-w-lg"
                    onClick={(e) => e.stopPropagation()}
                >
                    <Card className="relative overflow-hidden bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent pointer-events-none" />

                        <motion.button
                            className="absolute top-4 right-4 p-1 rounded-full bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
                            onClick={onClose}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Close overlay"
                        >
                            <X size={24} className="text-gray-700" />
                        </motion.button>

                        <div className="relative p-6 md:p-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="prose prose-gray max-w-none"
                            >
                                {content}
                            </motion.div>
                        </div>
                    </Card>
                </motion.div>
            </div>
        </motion.div>
    )
}
