'use client';

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AzadChoices, AzadDiscussion, ExternalDiscussion } from '@/app/components';
import { useTranslations } from 'next-intl';
import ExternalDiscussionLink from "./ExternalDiscussionLink";

let messageEnd: HTMLElement | null

const Discussion = ({ stage, setStage }: { stage: number, setStage: Dispatch<SetStateAction<number>>, }) => {
    const [azadText, setAzadText] = useState<string[]>([])
    const t = useTranslations('Chap1s7');
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
                            <ExternalDiscussion text={t('dialogue.d1')} delay={4.5} />
                        </div>
                        {stage > 0 && <>
                            <AzadDiscussion azadText={azadText[0]} />
                            {/* <ExternalDiscussion text={t('dialogue.d2')} /> */}
                            <ExternalDiscussion text={t('dialogue.d3')}  />
                        </>}
                        {stage > 1 && <>
                            <AzadDiscussion azadText={azadText[1]} />
                            <ExternalDiscussion text={t('dialogue.d4')} />
                        </>}
                        {stage > 2 && <>
                            <AzadDiscussion azadText={azadText[2]} />
                            <ExternalDiscussion text={t('dialogue.d5')} />
                            <ExternalDiscussion text={t('dialogue.d6')} nbCharPrevDisc={t('dialogue.d5').length} delay={1}/>
                        </>}
                        {stage > 3 && <>
                            <AzadDiscussion azadText={azadText[3]} />
                            <ExternalDiscussion text={t('dialogue.d7')} />
                            <ExternalDiscussion text={t('dialogue.d8')} nbCharPrevDisc={t('dialogue.d7').length} delay={0.5}/>
                            <ExternalDiscussion text={t('dialogue.d9')} nbCharPrevDisc={t('dialogue.d7').length + t('dialogue.d8').length} delay={1}/>
                        </>}
                        {stage > 4 && <>
                            <AzadDiscussion azadText={azadText[4]} />
                            <ExternalDiscussion text={t('dialogue.d10')} />
                            <ExternalDiscussion text={t('dialogue.d11')} nbCharPrevDisc={t('dialogue.d10').length} delay={0.5}/>
                        </>}
                        {stage > 5 && <>
                            <AzadDiscussion azadText={azadText[5]} />
                            <ExternalDiscussion text={t('dialogue.d12')} />
                            <ExternalDiscussion text={t('dialogue.d13')} nbCharPrevDisc={t('dialogue.d12').length} delay={0.5}/>
                            <ExternalDiscussion text={t('dialogue.d14')} nbCharPrevDisc={t('dialogue.d12').length + t('dialogue.d13').length} delay={1.5}/>
                            <ExternalDiscussion text={t('dialogue.d15')} nbCharPrevDisc={t('dialogue.d12').length + t('dialogue.d13').length + t('dialogue.d14').length} delay={2.5}/>
                        </>}
                        {stage > 6 && <>
                            <AzadDiscussion azadText={azadText[6]} />
                            <ExternalDiscussion text={t('dialogue.d16')} />
                            <ExternalDiscussion text={t('dialogue.d17')} nbCharPrevDisc={t('dialogue.d16').length} delay={1}/>
                            <ExternalDiscussion text={t('dialogue.d18')} nbCharPrevDisc={t('dialogue.d16').length + t('dialogue.d17').length} delay={1.5}/>
                        </>}
                        {stage > 7 && <>
                            <AzadDiscussion azadText={azadText[7]} />
                            <ExternalDiscussionLink name="Skyler" delay={1.2} text1={t('text1')} text2={t('text2')} />
                            <ExternalDiscussion text={t('dialogue.d19')} name="Skyler" delay={3} telegramWindow={false} />
                        </>}
                        {stage > 8 && <>
                            <AzadDiscussion azadText={azadText[8]} />
                        </>}
                        <div id="end" />
                    </div>
                </div>
                <div className="my-1 w-full"
                >
                    {stage === 0 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c1.choice1')} choice2={t('choices.c1.choice2')} nbCharPrevDisc={t('dialogue.d1').length} delay={5.5} />
                    }
                    {stage === 1 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c2.choice1')} choice2={t('choices.c2.choice2')} nbCharPrevDisc={t('dialogue.d3').length} />
                    }
                    {stage === 2 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c3.choice1')} choice2={t('choices.c3.choice2')} nbCharPrevDisc={t('dialogue.d4').length} />
                    }
                    {stage === 3 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c4.choice1')} choice2={t('choices.c4.choice2')} nbCharPrevDisc={t('dialogue.d5').length + t('dialogue.d6').length} delay={2.5}/>
                    }
                    {stage === 4 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c5.choice1')} choice2={t('choices.c5.choice2')} nbCharPrevDisc={t('dialogue.d7').length + t('dialogue.d8').length + t('dialogue.d9').length} delay={2.5}/>
                    }
                    {stage === 5 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c6.choice1')} choice2={t('choices.c6.choice2')} nbCharPrevDisc={t('dialogue.d10').length + t('dialogue.d11').length} delay={1}/>
                    }
                    {stage === 6 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c7.choice1')} choice2={t('choices.c7.choice2')} nbCharPrevDisc={t('dialogue.d12').length + t('dialogue.d13').length + t('dialogue.d14').length + t('dialogue.d15').length} delay={4.5}/>
                    }
                    {stage === 7 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c8.choice1')} choice2={t('choices.c8.choice2')} nbCharPrevDisc={t('dialogue.d16').length + t('dialogue.d17').length + t('dialogue.d18').length} delay={3}/>
                    }
                    {stage === 8 &&
                        <AzadChoices stage={stage} setStage={setStage} azadText={azadText} setAzadText={setAzadText} choice1={t('choices.c9.choice1')} choice2={t('choices.c9.choice2')} nbCharPrevDisc={t('dialogue.d19').length} delay={5}/>
                    }

                </div>
            </div>
        </div >
    )
}

export default Discussion;