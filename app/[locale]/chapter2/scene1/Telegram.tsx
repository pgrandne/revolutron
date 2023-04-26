'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AzadDiscussion, ExternalDiscussion, TelegramChoices, TelegramSkeleton } from '@/app/components'
import TelegramPaste from "./TelegramPaste"
import { useTranslations } from 'next-intl';


const Telegram = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const [playerAddress, setPlayerAddress] = useState('')
    const [externalAnswer, setExternalAnswer] = useState('')
    const messageEnd = document.getElementById("end");
    const t = useTranslations('Chap2s1');

    const scrollToBottom = () => {
        if (messageEnd !== null)
            messageEnd.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scrollToBottom()
        console.log(stage)
        if (stage === 4) {
            console.log('ask')
            askGas()
            console.log('gas requested')
        }
        scrollToBottom()
    }, [stage]);

    const askGas = async () => {
        let text
        const data = { address: playerAddress }
        console.log(data.address)
        const response = await fetch('/api/gas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        console.log('gas request done')
        if (response.status === 200) {
            text = t('sentgas')
            setStage(5)
        }
        else {
            if (response.status === 423)
                text = t('havegas')
            else {
                text = t('networkissues')
                setStage(98)
            }
        }
        setExternalAnswer(text)
    }

    return (
        <TelegramSkeleton>
            <div className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">November 2</div>
                        <div className="w-3/4 my-1">
                            <div className="my-1 p-2 bg-white rounded-t-lg rounded-r-lg shadow">
                                <div className="text-sm text-black">
                                    {t('dialogue.d1')}
                                </div>
                            </div>
                        </div>
                        {stage > 0 &&
                            <>
                                <AzadDiscussion azadText={azadText[0]} />
                                <ExternalDiscussion text={t('dialogue.d2')} telegramWindow={true} />
                                <ExternalDiscussion text={t('dialogue.d3')} telegramWindow={true} delay={2.5} />
                                <ExternalDiscussion text={t('dialogue.d4')} telegramWindow={true} delay={5} />
                                <ExternalDiscussion text={t('dialogue.d5')} telegramWindow={true} delay={7} />
                            </>
                        }
                        {stage > 1 &&
                            <AzadDiscussion azadText={azadText[1]} />
                        }
                        {stage > 2 &&
                            <>
                                <ExternalDiscussion text={azadText[2]} telegramWindow={true} />
                                {stage < 99 &&
                                    <ExternalDiscussion text={t('dialogue.d6')} telegramWindow={true} delay={2.5} />
                                }
                            </>
                        }
                        {stage > 3 && stage < 99 &&
                            <>
                                <AzadDiscussion azadText={azadText[3]} />
                                {stage < 98 &&
                                    <>
                                        <ExternalDiscussion text={t('dialogue.d7')} telegramWindow={true} />
                                        <ExternalDiscussion text={t('dialogue.d8')} telegramWindow={true} delay={2.5} />
                                    </>
                                }
                            </>
                        }
                        {stage > 4 && stage < 99 &&
                            <>
                                <ExternalDiscussion text={externalAnswer} telegramWindow={true} delay={6} />
                                {stage < 98 &&
                                    <ExternalDiscussion text={t('dialogue.d9')} telegramWindow={true} delay={9.5} />
                                }
                            </>
                        }
                        <div id="end" />
                    </div>
                </div>
                {stage === 0 &&
                    <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} />
                }
                {(stage === 1 || stage === 2) &&
                    <TelegramPaste stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} setPlayerAddress={setPlayerAddress} />
                }
                {stage === 3 &&
                    <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} />
                }
            </div>
        </TelegramSkeleton>
    )
}

export default Telegram;