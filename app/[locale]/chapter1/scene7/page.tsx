'use client';

import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import Discussion from './Discussion'
import Sequence from './Sequence'
import { ArrowButton, LinkLocale, ModalFeedback } from "@/app/components";

const Chap1s7 = () => {
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
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            >
            < ModalFeedback setModalFeedback={setModalFeedback} />
            </motion.div>  
            }
        </div >
    )
}

export default Chap1s7