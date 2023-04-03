'use client';

import { useEffect, useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ModalFeedback, MotionOp } from "@/app/components";

const Chap1s6 = () => {
    const [stage, setStage] = useState(0)
    const [modalFeedback, setModalFeedback] = useState(false)

    useEffect(() => {
        if (stage === 9)
            setModalFeedback(true)
    }, [stage])

    return (
        <div className="flex flex-row">
            {true &&
                <div className="bar-of-progress fixed top-0 left-0 h-1 bg-red-800 w-11/12" />
            }
            <div className="relative basis-2/3 w-full overflow-hidden">
                <Sequence />
            </div>
            <div className="basis-1/3 p-6 h-screen flex-grow-0">
                <Discussion stage={stage} setStage={setStage} />
            </div>
            {modalFeedback &&
                <MotionOp>
                    < ModalFeedback setModalFeedback={setModalFeedback} />
                </MotionOp>
            }
        </div >
    )
}

export default Chap1s6