'use client';

import Image from "next/image"
import { AnimatedText, MotionSlideX, MotionSlideY } from '@/app/components';
import { AzadRuizPic, ForkliftPic, RuizWorkingPic, BackgroundPic, BoxDamagedPic, PaperPic } from "@/public/img"
import { useTranslations } from 'next-intl';

const Sequence = () => {
    const t = useTranslations('Chap2s3');

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <MotionSlideX className="flex pl-[15%] pr-[15%]">
                <Image className="object-contain" src={AzadRuizPic} alt="Azad Ruiz" />
            </MotionSlideX>
            {/* <MotionSlideY>
                <div className="flex justify-end pl-[35%] pt-[10%] pb-[15%]">
                    <Image className="object-contain" src={SkylerPhonePic} alt="Skyler phone" />
                </div>
            </MotionSlideY> */}
        </div >
    )
}

export default Sequence;