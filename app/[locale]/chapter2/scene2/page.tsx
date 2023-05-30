'use client';

import { useEffect, useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ArrowButton, LinkLocale, ModalTransaction, MotionOp, ProgressionBar } from '@/app/components';

const Chap2s2 = () => {
    const [stage, setStage] = useState(0)
    const [transactionModal, setTransactionModal] = useState(false)

    useEffect(() => {
        if (stage === 1) {
            setTransactionModal(true)
        }
    }, [stage])

    return (
        <div className="flex flex-row">
            <ProgressionBar progression={"w-2/12"} />
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence />
                {stage === 3 &&
                    <MotionOp>
                        <LinkLocale href="/chapter2/scene3" className="absolute bottom-8 right-8 animate-pulse">
                            <ArrowButton />
                        </LinkLocale>
                    </MotionOp>
                }
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div>
            {transactionModal &&
                <MotionOp delay={14}>
                    <ModalTransaction setTransactionModal={setTransactionModal} setStage={setStage} />
                </MotionOp>
            }
        </div >
    )
}

export default Chap2s2;