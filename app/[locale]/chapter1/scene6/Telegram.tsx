'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl';
import { AzadDiscussion, ExternalDiscussion, TelegramChoices, TelegramSkeleton } from '@/app/components'

const Telegram = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [write, setWrite] = useState(false)
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s6');
    const messageEnd = document.getElementById("end");
    const scrollToBottom = () => {
        if (messageEnd !== null)
            messageEnd.scrollIntoView({ behavior: "smooth" })
    };
    useEffect(scrollToBottom, [stage]);

    return (
        <motion.div
            className="flex w-full h-full overflow-hidden antialiased rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <div className="relative flex flex-col flex-1 bg-zinc-300">
                <TelegramSkeleton />
                <div className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
                    <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                        <div className="relative flex flex-col px-3 py-2 m-auto">
                            <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">October 31</div>
                            <div className="w-3/4 my-1">
                                <div className="my-1 p-2 bg-white rounded-t-lg rounded-r-lg shadow">
                                    <div className="text-sm text-black">
                                        {t('dialogue.d4')}
                                    </div>
                                </div>
                            </div>
                            {stage > 4 &&
                                <>
                                    <AzadDiscussion azadText={azadText[0]} />
                                    <ExternalDiscussion text={t('dialogue.d5')} telegramWindow={true} />
                                </>
                            }
                            {stage > 5 &&
                                <>
                                    <AzadDiscussion azadText={azadText[1]} />
                                    <ExternalDiscussion text={t('dialogue.d6')} telegramWindow={true} />
                                </>
                            }
                            {stage > 6 &&
                                <>
                                    <AzadDiscussion azadText={azadText[2]} />
                                    <ExternalDiscussion text={t('dialogue.d7')} telegramWindow={true} />
                                </>
                            }
                            {stage > 7 &&
                                <>
                                    <AzadDiscussion azadText={azadText[3]} />
                                    <ExternalDiscussion text={t('dialogue.d8')} telegramWindow={true} />
                                    <ExternalDiscussion text={t('dialogue.d9')} telegramWindow={true} delay={2.5} />
                                </>
                            }
                            {stage > 8 &&
                                <>
                                    <AzadDiscussion azadText={azadText[4]} />
                                    <ExternalDiscussion text={t('dialogue.d10')} telegramWindow={true} />
                                </>
                            }
                            {stage > 9 &&
                                <>
                                    <AzadDiscussion azadText={azadText[5]} />
                                    <ExternalDiscussion text={t('dialogue.d11')} telegramWindow={true} />
                                    <ExternalDiscussion text={t('dialogue.d12')} telegramWindow={true} delay={2.5} />
                                </>
                            }
                            <div id="end" />
                        </div>
                    </div>
                    {stage === 4 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c4.choice1')} choice2={t('choices.c4.choice2')} />
                    }
                    {stage === 5 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c5.choice1')} choice2={t('choices.c5.choice2')} />
                    }
                    {stage === 6 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c6.choice1')} choice2={t('choices.c6.choice2')} />
                    }
                    {stage === 7 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c7.choice1')} choice2={t('choices.c7.choice2')} />
                    }
                    {stage === 8 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c8.choice1')} choice2={t('choices.c8.choice2')} />
                    }
                    {stage === 9 &&
                        <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c9.choice1')} choice2={t('choices.c9.choice2')} />
                    }
                </div>
            </div>
        </motion.div >
    )
}

export default Telegram;