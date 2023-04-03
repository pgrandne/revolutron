'use client';

import { useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components'
import { useTranslations } from 'next-intl';
import { Dispatch, SetStateAction } from "react";

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s4');

    return (
        <div className="flex w-full h-full">
            <div className="relative flex flex-col flex-1">
                <div className="self-center flex-1 w-full max-w-xl overflow-auto">
                    <div className="relative flex flex-col px-3 py-2 m-auto">
                        <div>
                            <ExternalDiscussion text={t('dialogue.d7')} delay={6} />
                        </div>
                        {stage > 6 && <>
                            <AzadDiscussion azadText={azadText[0]} />
                            <ExternalDiscussion text={t('dialogue.d8')} />
                        </>}
                        {stage > 7 && <>
                            <AzadDiscussion azadText={azadText[1]} />
                            <ExternalDiscussion text={t('dialogue.d9')} />
                        </>}
                        {stage > 8 && <>
                            <AzadDiscussion azadText={azadText[2]} />
                        </>}
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c5.choice1')} choice2={t('choices.c5.choice2')} nbCharPrevDisc={t('dialogue.d7').length} delay={7} />
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c6.choice1')} choice2={t('choices.c6.choice2')} nbCharPrevDisc={t('dialogue.d8').length} />
                    }
                    {stage === 8 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c7.choice1')} choice2={t('choices.c7.choice2')} nbCharPrevDisc={t('dialogue.d9').length} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;