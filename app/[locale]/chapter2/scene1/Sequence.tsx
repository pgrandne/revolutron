'use client';

import { motion } from "framer-motion"
import Image from "next/image"
import { AnimatedText } from '@/app/components';
import redactionPic from "@/public/img/newsroom1.png"
import notifPic from "@/public/img/notif.png"
import { azadDeskPic } from "@/public/img"
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from 'next-intl';

const Sequence = ({ setTelegramWindow, telegramWindow }: {
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
    telegramWindow: boolean,
}) => {
    const t = useTranslations('Chap2s1');

    return (
        <div className="relative flex flex-col justify-center h-full py-[5%]">
            <motion.div
                className="flex pr-[35%]"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 5.2, duration: 1 }}>
                <Image className="object-contain" src={redactionPic} alt="redaction" />
            </motion.div>
            <div className="pl-6 pt-2 z-10">
                <AnimatedText size={"text-xl"} content={t('narration')} speed={0.05} delay={7} />
            </div>
            <>
                < motion.div
                    className="absolute bottom-0 right-0 flex h-full"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 6.3, duration: 1 }}>
                    <div className="flex justify-end pl-[40%] pt-[20%] pb-[0%]">
                        <Image className="object-contain" src={azadDeskPic} alt="Azad" />
                    </div>
                </motion.div>
                {!telegramWindow &&
                    < motion.div
                        className="absolute top-0 right-0 flex h-full"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 8, duration: 1.5 }}>
                        <div className="flex pl-[70%] pt-[15%] pb-[47%]">
                            <Image
                                className="object-contain cursor-pointer animate-pulse"
                                src={notifPic}
                                alt="notification"
                                onClick={() => setTelegramWindow(true)}
                            />
                        </div>
                    </motion.div>}
            </>
        </div >
    )
}

export default Sequence;