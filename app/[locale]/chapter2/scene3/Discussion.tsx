'use client';

import { useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { Dispatch, SetStateAction, useEffect } from "react";
import { useTranslations } from 'next-intl';

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap2s3');

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
                        <ExternalDiscussion text={t('dialogue.d1')} name="Ruiz" delay={1} />
                        <ExternalDiscussion text={t('dialogue.d2')} name="Ruiz" nbCharPrevDisc={t('dialogue.d1').length} nbFollowingDialogue={2} delay={1}/>
                        <ExternalDiscussion text={t('dialogue.d3')} name="Ruiz" nbCharPrevDisc={t('dialogue.d1').length + t('dialogue.d2').length} nbFollowingDialogue={3} delay={1}/>
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} />
                            <ExternalDiscussion text={t('dialogue.d4')} name="Ruiz" />
                            <ExternalDiscussion text={t('dialogue.d5')} name="Ruiz" nbCharPrevDisc={t('dialogue.d4').length} nbFollowingDialogue={2} />                            
                        </>}
                        {stage > 1 && <>                            
                            <ExternalDiscussion text={t('dialogue.d6')} name="Ruiz" />
                            <ExternalDiscussion text={t('dialogue.d7')} name="Ruiz" nbCharPrevDisc={t('dialogue.d6').length} nbFollowingDialogue={2} />                            
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[1]} />
                            <ExternalDiscussion text={t('dialogue.d8')} name="Ruiz" />
                            <ExternalDiscussion text={t('dialogue.d9')} name="Ruiz" nbCharPrevDisc={t('dialogue.d8').length} nbFollowingDialogue={2} />
                            <ExternalDiscussion text={t('dialogue.d10')} name="Ruiz" nbCharPrevDisc={t('dialogue.d8').length + t('dialogue.d9').length} nbFollowingDialogue={3} />
                        </>}
                        {stage > 4 && <>
                            <AzadDiscussion azadText={azadText[2]} />
                            <ExternalDiscussion text={t('dialogue.d11')} name="Ruiz" />
                            <ExternalDiscussion text={t('dialogue.d12')} name="Ruiz" nbCharPrevDisc={t('dialogue.d11').length} nbFollowingDialogue={2} />
                            <ExternalDiscussion text={t('dialogue.d13')} name="Ruiz" nbCharPrevDisc={t('dialogue.d11').length + t('dialogue.d12').length} nbFollowingDialogue={3} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} delay={14} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} nbCharPrevDisc={t('dialogue.d6').length + t('dialogue.d7').length} />
                    }
                    {stage === 4 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} nbCharPrevDisc={t('dialogue.d8').length + t('dialogue.d9').length + t('dialogue.d10').length} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Discussion;