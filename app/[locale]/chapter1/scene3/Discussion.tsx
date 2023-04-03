'use client';

import { useEffect, useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { useTranslations } from 'next-intl';
import { Dispatch, SetStateAction } from "react";

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>> }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s3');

    useEffect(() => {
        if (typeof document !== "undefined") {
            messageEnd = document.getElementById("end")
        }
        if (messageEnd !== null) {
            messageEnd.scrollIntoView({ behavior: "smooth" })
        }

    }, [stage])

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        {stage < 3 &&
                            <>
                                <ExternalDiscussion text={t('dialogue.d7')} delay={6} />
                                <ExternalDiscussion text={t('dialogue.d8')} name="Rob" nbCharPrevDisc={t('dialogue.d7').length} delay={6.5} />
                                <ExternalDiscussion text={t('dialogue.d9')} name="Jessy" nbCharPrevDisc={t('dialogue.d7').length + t('dialogue.d8').length} delay={7} />
                                {stage > 0 && <>
                                    <AzadDiscussion azadText={azadText[0]} />
                                    <ExternalDiscussion text={t('dialogue.d10')} name="Skyler" delay={0} />
                                </>}
                                {stage > 1 &&
                                    <AzadDiscussion azadText={azadText[1]} />
                                }
                            </>
                        }
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c6.choice1')} choice2={t('choices.c6.choice2')} delay={16} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c7.choice1')} choice2={t('choices.c7.choice2')} nbCharPrevDisc={t('dialogue.d10').length} />
                    }
                </div>
            </div>
        </div >
    )
}

export default Discussion;