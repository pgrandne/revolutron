import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { isMobile } from 'react-device-detect';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import github from "@/public/svg/github-white.svg";
import linkedin from "@/public/svg/linkedin-white.svg";
import twitter from "@/public/svg/twitter-white.svg";
import donation from "@/public/svg/donation2.svg"
import info from "@/public/svg/info.svg"

export const MotionOp = ({ children, opacity = 1, delay, duration }: {
    children: React.ReactNode
    opacity?: number
    delay: number
    duration: number
}) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: opacity }}
            transition={{ delay: delay, duration: duration }}
        >
            {children}
        </motion.div>
    )
}

export const MotionHero = ({ title, subtitle }: {
    title: string
    subtitle: string
}) => {

    return (
        <>
            <motion.div
                className="hidden sm:block fixed top-5 left-5 -z-10"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 6, duration: 1 }}
            >
                <p className="text-white text-opacity-70 text-xl">{subtitle}</p>
            </motion.div>
            <motion.h1
                className="text-center text-2xl sm:text-7xl"
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', delay: 1, duration: 1.1 }}
            >
                RevoluTRON
            </motion.h1>
            <motion.p
                className="text-center pb-4 sm:pb-12"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', delay: 2, duration: 1.1 }}
            >
                {title}
            </ motion.p>
        </>
    )
}

export const MotionHeroButton = ({ buttonName, setModalProgression }: {
    buttonName: string
    setModalProgression: Dispatch<SetStateAction<boolean>>
}) => {
    const router = useRouter()

    return (

        <motion.div
            className="flex mx-auto place-content-center"
            initial={{ opacity: 0, y: 250 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', delay: 3, duration: 3 }}
        >
            <motion.button
                className="btnHero"
                whileHover={{ rotate: 7, scale: 1.5, transition: { duration: 0.1 } }}
                onClick={() => {
                    !isMobile ? setModalProgression(true) : router.push("/mobile")
                }
                }
            >
                {buttonName}
            </motion.button>
        </motion.div >

    )
}

export const MotionFooter = ({ setModalInfo, setDeck }: {
    setModalInfo: Dispatch<SetStateAction<boolean>>
    setDeck: Dispatch<SetStateAction<boolean>>

}) => {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
        >
            <div className="fixed bottom-3 left-3 flex gap-1">
                <a className="" href="https://github.com/pgrandne/revolte" target="_blank" rel="noreferrer">
                    <Image
                        className="h-8 w-8 object-contain cursor-pointer opacity-70 hover:opacity-100"
                        src={github}
                        alt="github"
                    />
                </a>
                <a href="https://www.linkedin.com/company/irruption-lab/" target="_blank" rel="noreferrer">
                    <Image
                        className="h-8 w-8 object-contain cursor-pointer opacity-70 hover:opacity-100"
                        src={linkedin}
                        alt="linkedin"
                    />
                </a>
                <a href="https://twitter.com/IrruptionLab" target="_blank" rel="noreferrer">
                    <Image
                        className="h-8 w-8 object-contain cursor-pointer opacity-70 hover:opacity-100"
                        src={twitter}
                        alt="twitter"
                    />
                </a>
            </div>
            <div className="fixed bottom-3 right-3 flex gap-1">
                <div
                    className=""
                    onClick={() => {
                        setDeck(false)
                        setModalInfo(true)
                    }}>
                    <Image
                        className="h-8 w-8 object-contain cursor-pointer opacity-70 hover:opacity-100"
                        src={donation}
                        alt="Donation"
                    />
                </div>
                <div
                    className=""
                    onClick={() => {
                        setDeck(true)
                        setModalInfo(true)
                    }}>
                    <Image
                        className="h-8 w-8 object-contain cursor-pointer opacity-70 hover:opacity-100"
                        src={info}
                        alt="Info"
                    />
                </div>
            </div>
        </motion.div>
    )
}