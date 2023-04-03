'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Telegram from './Telegram'
import Image from "next/image";
import journalPic from "@/public/img/journal30oct.png"
import { AnimatedText, ArrowButton, LinkLocale } from '@/app/components';
import { useTranslations } from 'next-intl';

const Chap1s4 = () => {
    const [stage, setStage] = useState(0)
    const [telegramWindow, setTelegramWindow] = useState(false)
    const t = useTranslations('Chap1s4');

    return (
        <div className="flex flex-row">
            <div className="absolute overflow-hidden h-screen w-screen flex-flex-col p-1">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ delay: 1, duration: 7, times: [0, 0.2, 0.8, 1] }}
                >
                    <div className=" transform rotate-[-10deg] w-[62%] m-auto">
                        <Image
                            className="object-contain"
                            src={journalPic}
                            alt="journal"
                        />
                    </div>
                    <div className="absolute bottom-10 left-6 ">
                        <AnimatedText size={"text-2xl"} content={t('narration')} speed={0.06} delay={2.5} />
                    </div>
                </motion.div>
            </div>
            {stage < 5 &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-6/12" />
            }
            {stage > 5 &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-7/12" />
            }
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence stage={stage} telegramWindow={telegramWindow} setTelegramWindow={setTelegramWindow} />
                {stage === 4 &&
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                    >
                        <button
                            className="absolute bottom-8 right-8 animate-pulse"
                            onClick={() => setStage(6)}
                        >
                            <ArrowButton />
                        </button>
                    </motion.div>
                }
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                {telegramWindow && stage < 6 &&
                    < Telegram stage={stage} setStage={setStage} />
                }
                {stage > 5 &&
                    <Discussion stage={stage} setStage={setStage} />

                }
            </div>
            {
                stage === 9 &&
                < motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    <LinkLocale href="/chapter1/scene5" className="absolute bottom-8 right-8 animate-pulse">
                        <ArrowButton />
                    </LinkLocale>
                </motion.div>
            }
        </div >
    )
}




export default Chap1s4