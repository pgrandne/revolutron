'use client';

import { motion } from "framer-motion"
import { child, textAnimation } from "@/utils/animatedText"


export const ExternalDiscussion = ({
    text,
    name = "Skyler",
    nbCharPrevDisc = 0,
    delay = 0.7,
    telegramWindow = false,
    nbFollowingDialogue = 1
}: {
    text: string
    name?: string
    nbCharPrevDisc?: number
    delay?: number
    telegramWindow?: boolean
    nbFollowingDialogue?: number
}) => {
    const factor = 0.04

    const calculateDelay = () => {
        let calculatedDelay
        if (telegramWindow)
            calculatedDelay = delay + 2.5 * (nbFollowingDialogue - 1)
        else
            calculatedDelay = delay + (factor * nbCharPrevDisc) + 0.7 * (nbFollowingDialogue - 1)
        return calculatedDelay
    }

    return (

        <div className="w-3/4 my-1">
            {!telegramWindow &&
                <motion.div
                    className="my-2 p-2 bg-slate-100 rounded-t-lg rounded-r-lg shadow shadow-slate-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: calculateDelay(), duration: 1 }}
                >
                    <div className={name}>{name}</div>
                    <motion.div
                        className="text-sm text-slate-900"
                        variants={textAnimation(factor, calculateDelay())}
                        initial="hidden"
                        animate="visible"
                    >
                        {text.split("").map((word, index) =>
                            <motion.span
                                key={index}
                                variants={child}
                            >
                                {word}
                            </motion.span>
                        )}
                    </motion.div>
                </motion.div>
            }
            {
                telegramWindow &&
                <>
                    <motion.div
                        className="absolute p-2 w-20 text-sm bg-white rounded-t-lg rounded-r-lg shadow text-black"
                        animate={{ opacity: [0, 1, 1, 0] }}
                        transition={{ delay: calculateDelay(), duration: 2, times: [0, 0.2, 0.9, 1] }}
                    >
                        <div className="animate-bounce text-teal-500 w-6 h-6 ...">
                            typing...
                        </div>
                    </motion.div>
                    <motion.div
                        className="my-1 p-2 bg-white rounded-t-lg rounded-r-lg shadow"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: calculateDelay() + 2, duration: 1 }}
                    >
                        <div className="text-sm text-black">
                            {text}
                        </div>
                    </motion.div>
                </>
            }
        </div >
    )
}
