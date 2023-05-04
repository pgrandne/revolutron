'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { lurembergPic, tassePic, kiosquePic, journalPic } from "@/public/img"
import { AnimatedText, ArrowButton, LinkLocale } from '@/app/components'
import { useTranslations } from 'next-intl';

const Chap1s1 = () => {
    const t = useTranslations('Chap1s1');

    return (
        <div className="font-permarker relative flex justify-center w-screen h-screen my-auto">
            <div className="my-auto">
                <motion.h1
                    className="text-center text-7xl"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 0.8, duration: 1 }}
                >
                    {t('title')}
                </motion.h1>
                <motion.p
                    className="text-center text-xl"
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', delay: 1.5, duration: 1 }}
                >
                    {t('subtitle')}
                </ motion.p>
            </div>
            <motion.div
                className="absolute top-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 1 }}
            >
                <Image
                    className="w-screen h-screen"
                    src={lurembergPic}
                    alt="Luremberg"
                />
            </motion.div>
            <div className="p-1 absolute bottom-20 left-20 flex flex-col">
                <AnimatedText size="text-4xl" content={t('narration')} speed={0.08} delay={4.5} />
                <AnimatedText size="text-2xl" content={t('day')} speed={0.08} delay={7} />
            </div>
            <motion.div
                className="absolute top-[21%] left-[7%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 9.2, duration: 0.8 }}
            >
                <Image
                    className="h-[240px] w-full border-8 border-[#dac8bc]"
                    src={tassePic}
                    alt="tasse"
                />
            </motion.div>
            <motion.div
                className="absolute bottom-[17%] right-[7%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1] }}
                transition={{ delay: 11, duration: 0.8 }}
            >
                <Image
                    className="object-contain h-[360px] w-full border-8 border-[#dac8bc]"
                    src={kiosquePic}
                    alt="Kiosque"
                />
            </motion.div>
            <motion.div
                className="absolute h-screen w-screen bg-[#0f1216]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 14, duration: 1 }}
            >
                <Image
                    src={journalPic}
                    fill={true}
                    style={{ objectFit: "contain" }}
                    alt="Journal"
                />
                <LinkLocale href="/chapter1/scene2" className="absolute bottom-8 right-8 animate-pulse">
                    <ArrowButton />
                </LinkLocale>
            </motion.div>

        </div >
    )
}

export default Chap1s1;