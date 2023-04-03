'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ArrowButton, LinkLocale } from '@/app/components';

const Chap1s3 = () => {
    const [stage, setStage] = useState(0)

    return (
        <div className="flex flex-row">
            {/* {stage < 6 &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-4/12" />
            } */}
            {stage < 2 &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-5/12" />
            }

            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence stage={stage} setStage={setStage} />
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div>
            {
                stage === 2 &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <LinkLocale href="/chapter1/scene4" className="absolute bottom-8 right-8 animate-pulse">
                        <ArrowButton />
                    </LinkLocale>
                </motion.div>
            }
        </div >
    )
}

export default Chap1s3;