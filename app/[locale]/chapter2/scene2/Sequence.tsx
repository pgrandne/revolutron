'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY } from '@/app/components';
import {  skylerPhonePic, azadPhonePic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap2s2');

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <MotionSlideX className="flex pr-[40%] pt-[4%]">
                <Image className="object-contain" src={azadPhonePic} alt="Azad Phone" />
            </MotionSlideX>
        
            <MotionSlideY delay={0.5}>
                <div className="flex justify-end pl-[30%] pt-[15%] pb-[15%]">
                    <Image className="object-contain" src={skylerPhonePic} alt="Skyler Phone" />
                </div>
            </MotionSlideY>
        </div >
    )
}

export default Sequence