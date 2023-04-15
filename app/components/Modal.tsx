'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LinkLocale from "@/app/components/LinkLocale"
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from "next/image";
import { perm_marker } from '@/utils/font'
import roadmap from "@/public/img/roadmap.png"
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { useWillChange } from "framer-motion";

export const ModalProgression = ({ route }: { route: string }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-20">
            <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-2/5`}>
                <div className="flex flex-col justify-center">
                    <p className="mb-4 font-bold ">Progression saved!</p>
                    <p className="mb-4 font-bold "> You can go to the next episode</p>
                </div>
                <button
                    className="flex bg-red-500 px-7 py-2 mx-auto rounded-md text-md text-white font-semibold"
                    onClick={() => {
                        setLoading(true)
                        router.push(route)

                    }}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {loading ? "Processing..." : "Next episode"}
                </button>
            </div>
        </div>
    )
}

export const ModalSelectChapter = ({ setModalSelectChapter, wallet }: {
    setModalSelectChapter: Dispatch<SetStateAction<boolean>>
    wallet: boolean
}) => {
    const t = useTranslations('Progression')
    const locale = useLocale()
    const router = useRouter()
    const { address } = useWallet()
    const [loading, setLoading] = useState(false)
    const [resumeButton, setResumeButton] = useState(t('resume'))

    useEffect(() => {
        if (typeof address !== 'undefined')
            setResumeButton(t('resume'))

    }, [address])

    const getProgression = async () => {
        setLoading(true)
        try {
            const progRes = await fetch('/api/progression', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ address, locale }),
            })
            if (progRes.status !== 200) throw new Error(t('error'))
            const path = await progRes.json()
            router.push(path.path)
        } catch (error) {
            alert(error.message)
            setModalSelectChapter(false)
        }
    }

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div className={`flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-2/5`}>
                <p className="mb-4 text-xl">{t('title')}</p>
                <LinkLocale className="btnProgression" href="/chapter1/scene1">{t('chapter')} 1</LinkLocale>
                {wallet && <LinkLocale className="btnProgression" href="/chapter2/scene1">{t('chapter')} 2</LinkLocale>}
                {!wallet && <LinkLocale className="btnProgression" href="/chapter2">{t('chapter')} 2</LinkLocale>}

                {wallet && <button
                    className="btnProgression text-3xl"
                    onClick={() => { typeof address === 'undefined' ? setResumeButton(t('connect')) : getProgression() }}
                >{resumeButton}
                </button>
                }
                <button
                    disabled={loading}
                    className="btnClose mx-auto w-36"
                    onClick={() => setModalSelectChapter(false)}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    <span className="mx-auto">{loading ? t('wait') : t('close')}</span>
                </button>
            </div>
        </div >
    )
}

export const ModalInfo = ({ setModalInfo, deck }:
    {
        setModalInfo: Dispatch<SetStateAction<boolean>>
        deck: boolean
    }) => {

    const t = useTranslations('Info')

    return (
        <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-50">
            <div className={` bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 rounded-md text-center w-4/5`}>
                <div className="flex justify-center">
                    {deck &&
                        <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold"><span className={`${perm_marker.className} md:text-3xl`}>RevoluTRON </span> {t('title')}</p>
                    }
                    {!deck &&
                        <p className="inline font-sans sm:block text-sm md:text-xl my-4 font-bold"><span className={`${perm_marker.className} md:text-3xl`}>RevoluTRON </span> {t('subtitle')}</p>
                    }
                </div>
                {deck &&
                    <p className="font-sans sm:block justify-center text-sm md:text-xl mb-4 font-bold ">{t('deck')} ( <a className="underline" target="_blank" href="https://www.canva.com/design/DAFbyLc5QMo/IqXpol56nzWCz1ccNuumNg/edit?utm_content=DAFbyLc5QMo&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">{t('online')} </a> / <a className="underline" target="_blank" href="https://drive.google.com/uc?id=1DSE_4--gNx3t6mdRUwFn1Zgw4_Q7vv7Q&export=download">{t('download')}</a> )</p>
                }
                {!deck &&
                    <p className="font-sans sm:block justify-center text-xs md:text-base mb-4 font-bold ">0x94b9420F65fB3ec966d96BB034b35AF86487D929</p>
                }
                <Image
                    className="object-contain transform md:scale-75"
                    src={roadmap}
                    alt="roadmap"
                />
                <button
                    className="bg-red-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    onClick={() => setModalInfo(false)}
                >{t('close')} </button>
            </div>
        </div>
    )
}

export const ModalFeedback = ({ setModalFeedback }: {
    setModalFeedback: Dispatch<SetStateAction<boolean>>
}) => {
    const router = useRouter()
    const locale = useLocale()

    return (
        <div className="bg-slate-800 bg-opacity-90 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0 z-30">
            <div className={`${perm_marker.className} flex flex-col bg-[#0f1216] px-2 sm:px-16 py-2 sm:py-14 gap-2 rounded-md text-center w-2/5`}>
                <p className="mb-4 text-2xl">Help us to enhance the experience and give us <a className="underline"> your feedback </a> </p>
                <p className="mb-4 text-sm">It only takes 1 minute</p>
                <a className="bg-red-500 hover:bg-red-700 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold" target="_blank" href="https://msprr0gajgn.typeform.com/to/DSl54TqJ#url=xxxxx"
                    onClick={() => {
                        setModalFeedback(false)
                        router.push(`${locale}/chapter2`)
                    }}

                >Sure!</a>

                <button
                    className="border-2 border-white opacity-70 hover:opacity-100 mt-2 px-7 py-2 ml-2 rounded-md text-2xl text-white font-semibold"
                    onClick={() => {
                        setModalFeedback(false)
                        router.push(`${locale}/chapter2`)
                    }}
                >Close</button>
            </div>
        </div >
    )
}

