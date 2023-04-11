'use client';

import { motion } from "framer-motion"
import Link from "@/app/components/LinkLocale"
import SaveButton from "@/app/components/SaveButton";
import { useState } from "react";
import { ModalProgression } from "@/app/components/Modal";
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';

const Chap2 = () => {
    const locale = useLocale()
    const t = useTranslations('Chap2');
    const { connected } = useWallet()
    const [modal, setModal] = useState(false)
    const progression = {
        chapter: 2,
        episode: 1,
        scene: 0
    }

    return (
        <div className="font-permarker relative flex justify-center w-screen h-screen my-auto overflow-hidden">
            <motion.div
                className="absolute top-3 left-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 2 }}
            >
            </motion.div>
            <div className="my-auto">
                {!connected &&
                    <div className="font-roboto font-bold my-10 text-center text-xl">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 2 }}
                        >
                            {t('tron')}
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            {t('tronLink1')}<a target="_blank" href="https://www.tronlink.org/" rel="noopener noreferrer" className="underline">link</a>{t('tronLink2')}
                        </ motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 5, duration: 2 }}
                        >
                            {t('gotochapter1')}<Link className="underline" href="/chapter1/scene1">{t('chapter1')}</Link> {t('gotochapter1end')}
                        </ motion.p>
                    </div>
                }
                {connected &&
                    <>
                        <motion.div
                            className="font-roboto font-bold my-10 text-center text-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 3, duration: 2 }}
                        >
                            {!connected &&
                                <p >
                                    {t('continue')} <br />
                                    {t('click')} <span className="font-extrabold">“Connect Wallet“</span> {t('select')}
                                </p>
                            }

                        </ motion.div>
                        {connected &&
                            <motion.div
                                className="flex flex-col gap-2 mx-auto place-content-center"
                                initial={{ opacity: 0, y: 250 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', delay: 1, duration: 3 }}
                            >
                                <SaveButton
                                    progression={progression}
                                    setModal={setModal}
                                />
                            </motion.div>
                        }
                    </>
                }
            </div>
            {modal && <ModalProgression route={`${locale}/chapter2/scene1`} />}
        </div >
    )
}

export default Chap2;