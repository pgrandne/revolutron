'use client'

import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { Dispatch, SetStateAction, useState } from 'react'
import { ArrowButton } from './'
import { IProgression } from '@/lib/interface'

const SaveButton = ({
    progression,
    setModal,
    arrow
}: {
    progression: IProgression
    setModal: Dispatch<SetStateAction<boolean>>
    arrow?: boolean
}) => {
    const { address } = useAccount()
    const { chain } = useNetwork()
    const { signMessageAsync } = useSignMessage()
    const [loading, setLoading] = useState(false)
    const signIn = async () => {
        try {
            const chainId = chain?.id
            if (!address || !chainId) return
            setLoading(true)
            const message = `Sign in to Revolte.app for saving your progression: \n - chapter: ${progression.chapter} \n - episode: ${progression.episode}`
            const signature = await signMessageAsync({
                message: message,
            })

            // Verify signature
            const verifyRes = await fetch('/api/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message, address, signature, progression }),
            })
            if (verifyRes.status !== 200) throw new Error('Error verifying message')
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
                    className="btnHero mx-auto"
                    disabled={loading}
                    onClick={signIn}
                >
                    {loading &&
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    }
                    {loading ? "Processing..." : "Save your progression"}
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