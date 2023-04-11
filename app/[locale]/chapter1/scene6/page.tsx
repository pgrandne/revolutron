'use client';

import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Image from 'next/image';
import { manReadJournalPic, tvPic } from '@/public/img'
import { AnimatedText, ArrowButton, LinkLocale, MotionOp, MotionSlideX, ProgressionBar } from '@/app/components'
import Telegram from './Telegram';
import { useTranslations } from 'next-intl';

const Chap1s6 = () => {
    const [telegramWindow, setTelegramWindow] = useState(false)
    const [stage, setStage] = useState(0)
    const [discussionWindow, setDiscussionWindow] = useState(true)
    const t = useTranslations('Chap1s6');

    return (
        <>
            {stage === 0 &&
                <div className="relative overflow-hidden flex justify-center w-screen h-screen my-auto">
                    <MotionSlideX className="flex justify-center py-[0%]">
                        <Image className="object-contain" src={tvPic} alt="TV" />
                    </MotionSlideX>
                    <div className="pt-10 pl-6 z-10">
                        <AnimatedText size="text-2xl" content={t('hour')} speed={0.05} delay={4} />
                        <div className="pt-3">
                            <AnimatedText size="text-3xl" content={t('narration')} speed={0.05} delay={5.5} />
                        </div>
                    </div>
                    <div className="absolute flex right-0 pb-[5%]">
                        <MotionOp delay={2} duration={2}>
                            <div className="flex justify-end pl-[0%] pb-[0%] pt-[30%]">
                                <Image className="object-contain" src={manReadJournalPic} alt="Journal" />
                            </div>
                        </MotionOp>
                    </div>
                    <MotionOp delay={8}>
                        <button
                            className="absolute bottom-8 right-[33%] animate-pulse z-10"
                            onClick={() => setStage(1)}
                        >
                            <ArrowButton />
                        </button>
                    </MotionOp>
                </div >
            }
            {stage > 0 &&
                <div className="flex flex-row">
                    <ProgressionBar progression={stage < 5 ? "w-9/12" : "w-10/12"} />
                    <div className="relative basis-2/3 w-full overflow-hidden">
                        <Sequence discussionWindow={discussionWindow} setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
                        {stage === 10 &&
                            <MotionOp delay={5}>
                                <LinkLocale href="/chapter1/scene7" className="absolute bottom-8 right-8 animate-pulse">
                                    <ArrowButton />
                                </LinkLocale>
                            </MotionOp>
                        }
                    </div>
                    <div className="basis-1/3 p-6 h-screen flex-grow-0">
                        {discussionWindow &&
                            <Discussion stage={stage} setStage={setStage} />
                        }
                        {telegramWindow &&
                            <Telegram stage={stage} setStage={setStage} />
                        }
                    </div>
                    {stage === 4 && discussionWindow &&
                        <MotionOp>
                            <button
                                className="absolute bottom-8 right-8 animate-pulse"
                                onClick={() => setDiscussionWindow(false)}
                            >
                                <ArrowButton />
                            </button>
                        </MotionOp>
                    }
                </div>
            }
        </>
    )
}

export default Chap1s6