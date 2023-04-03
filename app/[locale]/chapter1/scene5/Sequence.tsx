'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY, TelegramNotification } from '@/app/components';
import { azadDeskPic, chatPic, redactionPic } from "@/public/img"
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from 'next-intl';

const Sequence = ({ discussionWindow, setTelegramWindow, telegramWindow }: {
    discussionWindow: boolean,
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
    telegramWindow: boolean,
}) => {
    const t = useTranslations('Chap1s6');

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <MotionSlideX className="flex pr-[35%]">
                <Image className="object-contain" src={redactionPic} alt="redaction" />
            </MotionSlideX>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={t('narration2')} speed={0.05} delay={1.5} />
                {discussionWindow &&
                    <AnimatedText size={"text-base"} content={t('hour1')} speed={0.05} delay={3.5} />
                }
                {!discussionWindow &&
                    <AnimatedText size={"text-base"} content={t('hour2')} speed={0.05} delay={1} />
                }
            </div>
            {discussionWindow &&
                <MotionSlideY>
                    <div className="flex justify-end pl-[10%] pt-[25%] pb-[15%]">
                        <Image className="object-contain" src={chatPic} alt="chat" />
                    </div>
                </MotionSlideY>
            }
            {!discussionWindow &&
                <>
                    <MotionSlideY>
                        <div className="flex justify-end pl-[40%] pt-[20%] pb-[0%]">
                            <Image className="object-contain" src={azadDeskPic} alt="Azad" />
                        </div>
                    </MotionSlideY>
                    {!telegramWindow &&
                        <TelegramNotification setTelegramWindow={setTelegramWindow} />
                    }
                </>
            }
        </div >
    )
}

export default Sequence;