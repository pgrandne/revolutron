<<<<<<< HEAD
'use client';

import { useEffect, useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ModalFeedback, MotionOp, ProgressionBar } from "@/app/components";

const Chap1s7 = () => {
    const [stage, setStage] = useState(0)
    const [modalFeedback, setModalFeedback] = useState(false)

    useEffect(() => {
        if (stage === 9)
            setModalFeedback(true)
    }, [stage])

    return (
        <div className="flex flex-row">
            <ProgressionBar progression="w-11/12" />
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

export default Chap1s7
=======
'use client'

import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';

const Chap2s2 = () => {
    const locale = useLocale()
    redirect(`/${locale}/construction?source=chap1scene2`);
}

export default Chap2s2;
>>>>>>> 6ee396b71f365cc8104e3cda0606c87d4ac7d5b9
