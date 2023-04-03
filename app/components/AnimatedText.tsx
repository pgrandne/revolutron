'use client';

import { motion } from "framer-motion";
import { perm_marker } from '@/utils/font';

export const AnimatedText = (
    { size, content, speed, delay }: {
        size: string,
        content: string,
        speed: number,
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
                    className={perm_marker.className}
                    key={index}
                    variants={child}
                >
                    {word}
                </motion.span>
            )}
        </motion.div>
    )
}
