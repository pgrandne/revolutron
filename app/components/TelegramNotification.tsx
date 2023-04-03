import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image"
import { notifPic } from "@/public/img"

export const TelegramNotification = ({ setTelegramWindow, delay = 3.5 }: {
    delay?: number
    setTelegramWindow: Dispatch<SetStateAction<boolean>>
}) => (
    < motion.div
        className="absolute top-0 right-0 flex h-full"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: delay, duration: 1.5 }}>
        <div className="flex pl-[70%] pt-[15%] pb-[47%]">
            <Image
                className="object-contain cursor-pointer animate-pulse"
                src={notifPic}
                alt="notification"
                onClick={() => setTelegramWindow(true)}
            />
        </div>
    </motion.div>
)