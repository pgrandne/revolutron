'use client';

import { motion } from "framer-motion"
import { useState } from 'react'
import Image from "next/image";
import { azadConfusedPic, classifiedPic, documentPic, lockerPic, pickupPic } from '@/public/img'
import { AnimatedText, ArrowButton, LinkLocale } from "@/app/components";
import { useTranslations } from 'next-intl';

const Chap1s5 = () => {
    const [lockerOpened, setLockerOpened] = useState(false)
    const [stage, setStage] = useState(0)
    const t = useTranslations('Chap1s5');

    return (
        <>
            {!lockerOpened &&
                <div className="relative flex justify-center w-screen h-screen my-auto">
                    <motion.div
                        className="absolute top-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.2, duration: 1 }}
                    >
                        <Image
                            className="w-screen h-screen"
                            src={lockerPic}
                            alt="Locker"
                        />
                    </motion.div>

                    <div className="p-1 absolute bottom-14 left-20 flex flex-col">
                        <AnimatedText size="text-4xl" content={t('narration')} speed={0.05} delay={0.5} />
                        <AnimatedText size="text-2xl" content={t('hour')} speed={0.05} delay={2.3} />

                    </div>
                    <motion.div
                        className="absolute bottom-[16%] right-[9%]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 5, duration: 0.8 }}
                    >
                        <Image
                            className="object-contain h-[340px] w-full border-8 border-[#dac8bc] animate-pulse cursor-pointer"
                            onClick={() => {
                                setStage(1)
                                setTimeout(() => setLockerOpened(true), 1000)
                            }}
                            src={pickupPic}
                            alt="Pickup"
                        />
                    </motion.div>
                    {stage === 1 &&
                        < motion.div
                            className="absolute h-screen w-screen bg-[#0f1216]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                        </motion.div>
                    }
                </div >
            }

            {
                lockerOpened &&
                <div className="relative overflow-hidden flex justify-center w-screen h-screen my-auto ">
                    <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-8/12" />
                    <div className="flex flex-col justify-center pr-[35%]">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 2.5, duration: 1 }}
                        >
                            <Image className="object-contain" src={classifiedPic} alt="Classified" />
                        </motion.div>
                        <div className="pl-20 pt-2 z-10">
                            <AnimatedText size={"text-4xl"} content={t('narration2')} speed={0.06} delay={1} />
                        </div>
                    </div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: [30, 0, 0, 0], opacity: [0, 1, 1, 0] }}
                        transition={{ delay: 4, duration: 3.5, times: [0, 0.2, 0.7, 1] }}>
                        <div className="flex justify-end pl-[20%] pb-[10%] pt-[20%] ">
                            <Image className="object-contain" src={azadConfusedPic} alt="Azad" />
                        </div>
                    </motion.div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 0, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 7, duration: 2 }}>
                        <div className="flex justify-end pl-[50%] pb-[5%] pt-[10%]">
                            <Image className="object-contain" src={documentPic} alt="Classified-document" />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 8, duration: 1 }}
                    >
                        <LinkLocale href="/chapter1/scene6" className="absolute bottom-8 right-8 animate-pulse">
                            <ArrowButton />
                        </LinkLocale>
                    </motion.div>
                </div>
            }
        </>
    )
}

export default Chap1s5