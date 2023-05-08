'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY, TelegramNotification } from '@/app/components';
import { decorPic, phonePic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap2s2');

    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <MotionSlideX className="flex pr-[35%] pt-[10%]">
                <Image className="object-contain" src={decorPic} alt="redaction" />
            </MotionSlideX>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={t('narration')} delay={1.5} />
            </div>
            <MotionSlideY delay={5}>
                <div className="flex justify-end pl-[10%] pt-[25%] pb-[15%]">
                    <Image className="object-contain" src={phonePic} alt="chat" />
                </div>
            </MotionSlideY>
        </div >
    )
}

export default Sequence