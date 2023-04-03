'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from '@/app/components';
import { azadDeskPic, chatPic, notifPic, redactionPic, skylerPic } from "@/public/img"
import { useTranslations } from 'next-intl';


import { Dispatch, SetStateAction } from "react";

const Sequence = ({ stage, telegramWindow, setTelegramWindow }: {
    stage: number,
    telegramWindow: boolean
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
}) => {
    const t = useTranslations('Chap1s4');

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            {stage < 6 &&
                <>
                    <motion.div
                        className="flex pr-[35%]"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 8.5, duration: 1 }}>
                        <Image className="object-contain" src={redactionPic} alt="redaction" />
                    </motion.div>
                    <div className="pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={t('narration1')} speed={0.05} delay={10} />
                        <AnimatedText size={"text-base"} content={t('hour')} speed={0.05} delay={12} />
                    </div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 13, duration: 1 }}>
                        <div className="flex justify-end pl-[40%] pt-[20%] pb-[0%]">
                            <Image className="object-contain" src={azadDeskPic} alt="Azad" />
                        </div>
                    </motion.div>
                    {!telegramWindow &&
                        < motion.div
                            className="absolute top-0 right-0 flex h-full"
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 14.5, duration: 1.5 }}>
                            <div className="flex pl-[70%] pt-[15%] pb-[47%]">
                                <Image
                                    className="object-contain cursor-pointer animate-pulse"
                                    src={notifPic}
                                    alt="notification"
                                    onClick={() => setTelegramWindow(true)}
                                />
                            </div>
                        </motion.div>
                    }
                </>
            }
            {stage > 5 &&
                <>
                    <motion.div

                        className="flex pr-[37%]"

                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}>
                        <Image className="object-contain" src={skylerPic} alt="skyler office" />
                    </motion.div>
                    <div className="pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={t('narration2')} speed={0.04} delay={3} />                    
                    </div>
                    < motion.div
                        className="absolute bottom-0 right-0 flex h-full"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 5, duration: 1 }}>
                        <div className="flex justify-end pl-[15%] pt-[15%] pb-[5%]">
                            <Image className="object-contain" src={chatPic} alt="Azad" />
                        </div>
                    </motion.div>
                </>
            }




        </div >
    )
}

export default Sequence;