'use client';

import { useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { Dispatch, SetStateAction } from "react";
import { useTranslations } from 'next-intl';

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s2');

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <ExternalDiscussion text={t('dialogue.d1')} delay={6} />
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} />
                            <ExternalDiscussion text={t('dialogue.d2')} />
                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} />
                            <ExternalDiscussion text={t('dialogue.d3')} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} delay={8.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} nbCharPrevDisc={t('dialogue.d2').length} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} nbCharPrevDisc={t('dialogue.d3').length} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;