'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from '@/app/components';
import { friendsPic, pubPic } from "@/public/img"
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from 'next-intl';

const Sequence = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>> }) => {
    const t = useTranslations('Chap1s3');

    return (
        <div className="relative flex justify-center h-screen py-[5%]">
            <div className="relative flex justify-center flex-col">
                {
                    stage < 3 &&
                    <>
                        <motion.div
                            className="flex pr-[47%]"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}>
                            <Image className="object-contain" src={pubPic} alt="decor" priority={true} />
                        </motion.div>
                        <div className="pl-6 pt-2 z-10">
                            <AnimatedText size={"text-xl"} content={t('narration')} speed={0.05} delay={3} />
                            <AnimatedText size={"text-base"} content={t('hour')} speed={0.05} delay={4.7} />
                        </div>
                        <motion.div
                            className="absolute bottom-0 right-0 flex h-full"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 1.7, duration: 1 }}>
                            <div className="flex justify-end pl-[32%] pt-[13%] pb-[0%]">
                                <Image className="object-contain" src={friendsPic} alt="friends" />
                            </div>
                        </motion.div>
                    </>
                }
            </div >

        </div >
    )
}

export default Sequence;