'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY, TelegramNotification } from '@/app/components';
import { azadDeskPic, chatPic, redactionPic, skylerPic } from "@/public/img"
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
                    <MotionSlideX className="flex pr-[35%]" delay={8.5}>
                        <Image className="object-contain" src={redactionPic} alt="redaction" />
                    </MotionSlideX>
                    <div className="pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={t('narration1')} speed={0.05} delay={10} />
                        <AnimatedText size={"text-base"} content={t('hour')} speed={0.05} delay={12} />
                    </div>
                    <MotionSlideY delay={13}>
                        <div className="flex justify-end pl-[40%] pt-[20%] pb-[0%]">
                            <Image className="object-contain" src={azadDeskPic} alt="Azad" />
                        </div>
                    </MotionSlideY>
                    {!telegramWindow &&
                        <TelegramNotification setTelegramWindow={setTelegramWindow} delay={14.5} />
                    }
                </>
            }
            {stage > 5 &&
                <>
                    <MotionSlideX className="flex pr-[37%]">
                        <Image className="object-contain" src={skylerPic} alt="skyler office" />
                    </MotionSlideX>
                    <div className="pl-6 pt-2 z-10">
                        <AnimatedText size={"text-xl"} content={t('narration2')} speed={0.04} delay={3} />
                    </div>
                    <MotionSlideY>
                        <div className="flex justify-end pl-[15%] pt-[15%] pb-[5%]">
                            <Image className="object-contain" src={chatPic} alt="Azad" />
                        </div>
                    </MotionSlideY>
                </>
            }
        </div >
    )
}

export default Sequence;