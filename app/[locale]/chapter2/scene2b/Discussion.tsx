'use client';

import { useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { Dispatch, SetStateAction, useEffect } from "react";
import { useTranslations } from 'next-intl';

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap2s2');

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
                        <ExternalDiscussion text={t('dialogue.d1')} delay={1} />
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} />
                            <ExternalDiscussion text={t('dialogue.d2')} />
                            <ExternalDiscussion text={t('dialogue.d3')} nbCharPrevDisc={t('dialogue.d2').length} nbFollowingDialogue={2} />
                            <ExternalDiscussion text={t('dialogue.d4')} nbCharPrevDisc={t('dialogue.d2').length + t('dialogue.d3').length} nbFollowingDialogue={3} />
                            <ExternalDiscussion text={t('dialogue.d5')} nbCharPrevDisc={t('dialogue.d2').length + t('dialogue.d3').length + t('dialogue.d4').length} nbFollowingDialogue={4} />

                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} />


                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} delay={2} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} nbCharPrevDisc={t('dialogue.d2').length} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} nbCharPrevDisc={t('dialogue.d3').length} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;