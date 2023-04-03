'use client';

import { useEffect, useState, Dispatch, SetStateAction } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { useTranslations } from 'next-intl';

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s6');
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
                        <div>
                            <ExternalDiscussion text={t('dialogue.d1')} delay={5.5} />
                        </div>
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[0]} />
                            <ExternalDiscussion text={t('dialogue.d2')} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[1]} />
                            <ExternalDiscussion text={t('dialogue.d3')} />
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[2]} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} nbCharPrevDisc={t('dialogue.d1').length} delay={6.5} />
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