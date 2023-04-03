'use client';

import { useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ArrowButton, LinkLocale, MotionOp, ProgressionBar } from '@/app/components';

const Chap1s3 = () => {
    const [stage, setStage] = useState(0)

    return (
        <div className="flex flex-row">
            <ProgressionBar progression={"w-5/12"} />
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence stage={stage} setStage={setStage} />
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div>
            {stage === 2 &&
                <MotionOp>
                    <LinkLocale href="/chapter1/scene4" className="absolute bottom-8 right-8 animate-pulse">
                        <ArrowButton />
                    </LinkLocale>
                </MotionOp>
            }
        </div >
    )
}

export default Chap1s3;