'use client';

import { useEffect, useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ArrowButton, LinkLocale, ModalTransaction, MotionOp, ProgressionBar } from '@/app/components';

const Chap2s2 = () => {
    const [stage, setStage] = useState(0)
    const [transactionModal, setTransactionModal]= useState(true)

    useEffect(()=> {
        if (stage === 2) {
            setTransactionModal(true)
            setStage(3)
        }
    },[stage])

    return (
        <div className="flex flex-row">
            <ProgressionBar progression={"w-2/12"} />
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence />
                {stage === 4 &&
                    <MotionOp delay={4}>
                        <LinkLocale href="/chapter1/scene3" className="absolute bottom-8 right-8 animate-pulse">
                            <ArrowButton />
                        </LinkLocale>
                    </MotionOp>
                }
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                    <Discussion stage={stage} setStage={setStage} />
            </div>
            {stage === 3 &&
                <MotionOp>
                    <button
                        className="absolute bottom-8 right-8 animate-pulse"
                    >
                        <ArrowButton />
                    </button>
                </MotionOp>
            }
            {transactionModal && <ModalTransaction setTransactionModal={setTransactionModal} />}
        </div >
    )
}

export default Chap2s2;