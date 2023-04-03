'use client';

import { Dispatch, SetStateAction, useState } from "react"
import { AzadDiscussion, ExternalDiscussion, TelegramChoices, TelegramSkeleton } from '@/app/components'
import { useTranslations } from 'next-intl';

const Telegram = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s2');

    return (
        <TelegramSkeleton>
            <div className="top-0 bottom-0 left-0 right-0 flex flex-col flex-1 overflow-hidden bg-transparent bg-bottom bg-cover">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">Channel was created</div>
                        <div className="self-center px-2 py-1 mx-0 my-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-full shadow rounded-tg">October 18</div>
                        <div className="w-3/4 my-1">
                            <div className="my-1 p-2 bg-white rounded-t-lg rounded-r-lg shadow">
                                <div className="text-sm text-black">
                                    {t('dialogue.d4')}
                                </div>
                            </div>
                        </div>
                        <ExternalDiscussion text={t('dialogue.d5')} telegramWindow={true} />
                        <ExternalDiscussion text={t('dialogue.d6')} telegramWindow={true} nbFollowingDialogue={2} />

                        {stage > 3 &&
                            <>
                                <AzadDiscussion azadText={azadText[0]} />
                                <ExternalDiscussion text={t('dialogue.d7')} telegramWindow={true} />
                            </>
                        }
                    </div>
                </div>
                {stage === 3 &&
                    <TelegramChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c4.choice1')} choice2={t('choices.c4.choice2')} />
                }
            </div>
        </TelegramSkeleton>

    )
}

export default Telegram;