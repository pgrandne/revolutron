'use client'

import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

const Browser = () => {
    const t = useTranslations('Browser');
    const text = t('text')
    const words = text.split("")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.03 * i },

        })
    }

    const sentence = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: 0.03 * i },
        })
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
        <motion.div className="flex h-screen justify-center" >
            <motion.div
                className="text-white my-auto p-3"
                variants={sentence}
                initial="hidden"
                animate="visible"
            >
                {words.map((word, index) =>
                    <motion.span
                        className="font-permarker"
                        key={index}
                        variants={child}
                    >
                        {word}
                    </motion.span>
                )}
            </motion.div >
        </motion.div >
    )
}

export default Browser;