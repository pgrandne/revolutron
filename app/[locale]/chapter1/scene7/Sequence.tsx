'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from '@/app/components';
import { azadBackPic, skylerHomePic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap1s7');    

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}>
                <Image className="object-contain" src={skylerHomePic} alt="Skyler Home" />
            </motion.div>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={t('narration')} speed={0.05} delay={2.5} />
                <AnimatedText size={"text-base"} content={t('hour')} speed={0.05} delay={3.8} />
            </div>
            < motion.div
                className="absolute bottom-0 right-0 flex h-full"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}>
                <div className="flex justify-end pl-[30%] pt-[15%] pb-[5%]">
                    <Image className="object-contain" src={azadBackPic} alt="Azad" />
                </div>
            </motion.div>
        </div >
    )
}

export default Sequence;