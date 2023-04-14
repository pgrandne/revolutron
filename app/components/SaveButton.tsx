'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { ArrowButton } from './'
import { IProgression } from '@/utils/interface'
import { useTranslations } from 'next-intl'
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { perm_marker } from '@/utils/font'

const SaveButton = ({
    progression,
    setModal,
    arrow
}: {
    progression: IProgression
    setModal: Dispatch<SetStateAction<boolean>>
    arrow?: boolean
}) => {
    const t = useTranslations('Chap2');
    const { address, signMessage } = useWallet()
    const [loading, setLoading] = useState(false)
    const signIn = async () => {
        try {
            if (!address) return
            setLoading(true)
            const message = `${t('signin')} \n ${t('chapter')} ${progression.chapter} \n ${t('episode')} ${progression.episode}`
            const signature = await signMessage(message)

            // Verify signature
            const verifyRes = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, address, signature, progression }),
            })
            if (verifyRes.status !== 200) throw new Error(t('error'))
            setLoading(false)
            setModal(true)
        } catch (error) {
            setLoading(false)
            alert(error.message)
        }
    }

    return (
        <>
            {!arrow &&
                <button
                    className= {`${perm_marker.className} btnHero mx-auto`}
                    disabled={loading}
                    onClick={signIn}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {loading ? t('processing') : t('save')}
                </button>
            }
            {arrow &&
                <button
                    disabled={loading}
                    onClick={signIn}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {!loading && <ArrowButton />}
                </button>
            }
        </>
    )
}

export default SaveButton