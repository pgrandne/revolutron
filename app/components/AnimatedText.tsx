'use client';

import { motion } from "framer-motion";

export const AnimatedText = (
    { size, content, speed = 0.06, delay }: {
        size: string,
        content: string,
        speed?: number,
        delay: number
    }) => {

    const words = content.split("")
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: speed, delayChildren: delay },
        }
    }

    const child = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                type: "spring",
            }
        }
    }

    return (
        <motion.div
            className={size}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {content.split("").map((word, index) =>
                <motion.span
                    className="font-permarker"
                    key={index}
                    variants={child}
                >
                    {word}
                </motion.span>
            )}
        </motion.div>
    )
}
