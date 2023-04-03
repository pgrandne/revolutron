'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY } from '@/app/components';
import { azadBackPic, skylerHomePic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap1s7');

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <MotionSlideX className="flex pr-[35%]">
                <Image className="object-contain" src={skylerHomePic} alt="Skyler Home" />
            </MotionSlideX>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={t('narration')} speed={0.05} delay={2.5} />
                <AnimatedText size={"text-base"} content={t('hour')} speed={0.05} delay={3.8} />
            </div>
            <MotionSlideY>
                <div className="flex justify-end pl-[30%] pt-[15%] pb-[5%]">
                    <Image className="object-contain" src={azadBackPic} alt="Azad" />
                </div>
            </MotionSlideY>
        </div >
    )
}

export default Sequence;