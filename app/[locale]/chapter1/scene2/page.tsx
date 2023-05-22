'use client';

import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import Telegram from './Telegram'
import { ArrowButton, LinkLocale, MotionOp, ProgressionBar } from '@/app/components';
import ModalExpress from "@/app/components/ModalExpress";

const Chap1s2 = () => {
    const [stage, setStage] = useState(0)
    const [discussionWindow, setDiscussionWindow] = useState(true)
    const [telegramWindow, setTelegramWindow] = useState(false)

    return (
        <div className="flex flex-row">
            <ModalExpress></ModalExpress>
            <ProgressionBar progression={discussionWindow ? "w-2/12" : "w-3/12"} />
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence discussionWindow={discussionWindow} setTelegramWindow={setTelegramWindow} telegramWindow={telegramWindow} />
                {stage === 4 &&
                    <MotionOp delay={4}>
                        <LinkLocale href="/chapter1/scene3" className="absolute bottom-8 right-8 animate-pulse">
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
            {stage === 3 && discussionWindow &&
                <MotionOp>
                    <button
                        className="absolute bottom-8 right-8 animate-pulse"
                        onClick={() => setDiscussionWindow(false)}
                    >
                        <ArrowButton />
                    </button>
                </MotionOp>
            }
        </div >
    )
}

export default Chap1s2;