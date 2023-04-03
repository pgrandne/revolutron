'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Image from "next/image";
import { manReadJournalPic, tvPic } from "@/public/img"
import { AnimatedText, ArrowButton, LinkLocale } from "@/app/components";
import Telegram from "./Telegram";
import { useTranslations } from 'next-intl';

const Chap1s6 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const [discussionWindow, setDiscussionWindow] = useState(true)
    const t = useTranslations('Chap1s6');

    return (
        <>
            {stage === 0 &&
                <div className="relative overflow-hidden flex justify-center w-screen h-screen my-auto">
                    <motion.div
                        className="flex justify-center py-[0%]"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <Image className="object-contain" src={tvPic} alt="TV" />
                    </motion.div>
                    <div className="pt-10 pl-6 z-10">
                        <AnimatedText size="text-2xl" content={t('hour')} speed={0.05} delay={4} />
                        <div className="pt-3">
                            <AnimatedText size="text-3xl" content={t('narration')} speed={0.05} delay={5.5} />
                        </div>
                    </div>
                    <div className="absolute flex flex-col right-0">
                        < motion.div
                            className="flex h-full pb-[5%]"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 2, duration: 2 }}>
                            <div className="flex justify-end pl-[0%] pb-[0%] pt-[30%]">
                                <Image className="object-contain" src={manReadJournalPic} alt="Journal" />
                            </div>
                        </motion.div>
                    </div>
                    <motion.div
                        className="z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 8, duration: 1 }}
                    >
                        <button
                            className="absolute bottom-8 right-[33%] animate-pulse"
                            onClick={() => setStage(1)}
                        >
                            <ArrowButton />
                        </button>
                    </motion.div>
                </div>
            }
            {
                stage > 0 &&
                <div className="flex flex-row">
                    {stage < 5 &&
                        <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-9/12" />
                    }
                    {stage > 4 &&
                        <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-10/12" />
                    }
                    <div className="relative basis-2/3 w-full overflow-hidden">
                        <Sequence discussionWindow={discussionWindow} setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
                        {
                            stage === 10 &&
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 5, duration: 1 }}
                            >
                                <LinkLocale href="/chapter1/scene7" className="absolute bottom-8 right-8 animate-pulse">
                                    <ArrowButton />
                                </LinkLocale>
                            </motion.div>
                        }
                    </div>
                    <div className="basis-1/3 p-6 h-screen flex-grow-0">
                        {discussionWindow &&
                            <Discussion stage={stage} setStage={setStage} />
                        }
                        {telegramWindow &&
                            <Telegram stage={stage} setStage={setStage} />
                        }
                    </div>
                    {
                        stage === 4 && discussionWindow &&
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                        >
                            <button
                                className="absolute bottom-8 right-8 animate-pulse"
                                onClick={() => setDiscussionWindow(false)}
                            >
                                <ArrowButton />
                            </button>
                        </motion.div>
                    }
                </div>
            }
        </>
    )
}

export default Chap1s6