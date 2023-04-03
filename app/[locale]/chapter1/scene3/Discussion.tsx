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
                        {/* {stage < 6 &&
                            <>
                                <ExternalDiscussion text={t('dialogue.d1')} delay={2} />
                                {stage > 0 && <>
                                    <AzadDiscussion azadText={azadText[0]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={t('dialogue.d2')} name="Cook" />
                                </>}
                                {stage > 1 && <>
                                    <AzadDiscussion azadText={azadText[1]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={t('dialogue.d3')} name="Cook" />
                                </>}
                                {stage > 2 && <>
                                    <AzadDiscussion azadText={azadText[2]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={t('dialogue.d4')} name="Cook" />
                                </>}
                                {stage > 3 && <>
                                    <AzadDiscussion azadText={azadText[3]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={t('dialogue.d5')} name="Cook" />
                                </>}
                                {stage > 4 && <>
                                    <AzadDiscussion azadText={azadText[4]} delay={0.2} duration={0.7} />
                                    <ExternalDiscussion text={t('dialogue.d6')} name="Cook" />
                                </>}
                            </>
                        } */}
                        {stage < 3 &&
                            <>
                                <ExternalDiscussion text={t('dialogue.d7')} delay={6} />
                                <ExternalDiscussion text={t('dialogue.d8')} name="Rob" nbCharPrevDisc={t('dialogue.d7').length} delay={6.5} />
                                <ExternalDiscussion text={t('dialogue.d9')} name="Jessy" nbCharPrevDisc={t('dialogue.d7').length + t('dialogue.d8').length} delay={7} />
                                {stage > 0 && <>
                                    <AzadDiscussion azadText={azadText[0]}  />
                                    <ExternalDiscussion text={t('dialogue.d10')} name="Skyler" delay={0} />
                                </>}
                                {stage > 1 && 
                                    <AzadDiscussion azadText={azadText[1]}  />
                                }
                            </>
                        }
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {/* {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} delay={7} duration={.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} nbCharPrevDisc={t('dialogue.d2').length} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} nbCharPrevDisc={t('dialogue.d3').length} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c4.choice1')} choice2={t('choices.c4.choice2')} nbCharPrevDisc={t('dialogue.d4').length} />
                    }
                    {stage === 4 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c5.choice1')} choice2={t('choices.c5.choice2')} delay={6} duration={.5} />
                    } */}
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