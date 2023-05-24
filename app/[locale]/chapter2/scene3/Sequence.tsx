'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY } from '@/app/components';
import {  azadRuizPic, backgroundPic, boxDamagedPic, paperPic, forkliftPic, ruizPic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap2s2');

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <MotionSlideX className="flex px-[14%] ">
                <Image className="object-contain" src={azadRuizPic} alt="Azad Ruiz" />
            </MotionSlideX>
        </div >
    )
}

export default Sequence