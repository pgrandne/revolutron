'use client';

import { motion } from "framer-motion"

const ExternalDiscussion = ({ name, delay, text1, text2 }: {
    name: string
    delay: number
    text1: string
    text2: string
}) => {

    return (
        <div className="w-3/4 my-1">
            <motion.div
                className="my-2 p-2 bg-slate-100 rounded-t-lg rounded-r-lg shadow shadow-slate-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay, duration: 1 }}
            >
                <div className={name}>{name}</div>
                <div className="text-sm text-slate-900">
                    {text1} <a className="underline" href="https://www.tronlink.org/" target="_blank" rel="noreferrer">tronlink.org</a> {text2}
                </div>
            </motion.div>
        </div >
    )
}

export default ExternalDiscussion;