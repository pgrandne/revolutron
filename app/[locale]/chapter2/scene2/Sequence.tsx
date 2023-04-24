'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY } from '@/app/components';
import { AzadPhonePic, SkylerPhonePic, OfframpPic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap2s2');

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <MotionSlideX className="flex pr-[40%]">
                <Image className="object-contain" src={AzadPhonePic} alt="Azad phone" />
            </MotionSlideX>
            <MotionSlideY>
                <div className="flex justify-end pl-[35%] pt-[10%] pb-[15%]">
                    <Image className="object-contain" src={SkylerPhonePic} alt="Skyler phone" />
                </div>
            </MotionSlideY>
        </div >
    )
}

export default Sequence;