'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY } from '@/app/components';
import { friendsPic, pubPic } from "@/public/img"
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from 'next-intl';

const Sequence = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>> }) => {
    const t = useTranslations('Chap1s3');

    return (
        <div className="relative flex justify-center h-screen py-[5%]">
            <div className="relative flex justify-center flex-col">
                {stage < 3 &&
                    <>
                        <MotionSlideX className="flex pr-[47%]">
                            <Image className="object-contain" src={pubPic} alt="decor" priority={true} />
                        </MotionSlideX>
                        <div className="pl-6 pt-2 z-10">
                            <AnimatedText size={"text-xl"} content={t('narration')} speed={0.05} delay={3} />
                            <AnimatedText size={"text-base"} content={t('hour')} speed={0.05} delay={4.7} />
                        </div>
                        <MotionSlideY className="absolute bottom-0 right-0 flex h-full">
                            <div className="flex justify-end pl-[32%] pt-[13%] pb-[0%]">
                                <Image className="object-contain" src={friendsPic} alt="friends" />
                            </div>
                        </MotionSlideY>
                    </>
                }
            </div >
        </div >
    )
}

export default Sequence;