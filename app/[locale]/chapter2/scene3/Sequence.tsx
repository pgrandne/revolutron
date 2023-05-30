'use client';

import Image from "next/image"
import { MotionSlideX } from '@/app/components';
import { azadRuizPic } from "@/public/img"

const Sequence = () => {
    return (
        <div className="relative flex flex-col justify-center h-screen py-[5%]">
            <MotionSlideX className="flex px-[14%] ">
                <Image className="object-contain" src={azadRuizPic} alt="Azad Ruiz" />
            </MotionSlideX>
        </div >
    )
}

export default Sequence