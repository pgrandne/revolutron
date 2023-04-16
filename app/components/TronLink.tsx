'use client'

import { MouseEvent, useEffect, useState } from "react";
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { Dispatch, SetStateAction } from "react";
interface ITronLinkParams {
    ready: boolean
    request: any
    sunWeb: any;
    tronWeb: any;
}

// declare global {
//     interface Window {
//         tron: any
//         tronLink: ITronLinkParams
//     }
// }

export const TronLink = ({ setWallet }: { setWallet: Dispatch<SetStateAction<boolean>> }) => {
    const { address, disconnect, select, connected } = useWallet();
    const [walletButton, setWalletButton] = useState('Connect TronLink')
    useEffect(() => {
        if (address) {
            setWalletButton(`${address.slice(0, 5)}...${address.slice(29, 34)}`)
            setWallet(true)
        }
        else {
            setWalletButton('Connect TronLink')
            setWallet(false)
        }
    }, [address])

    const tronConnect = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!connected) {
            // if (typeof window !== 'undefined' && typeof window.tronLink !== 'undefined') {
                //  if (window.tron.isTronLink && !window.tronLink.ready)
                //      window.alert('Please unlock your TronLink')
                //  else
                // console.log(window.tron)
                // select('TronLink' as any)
            // } else
                // window.alert('Wallet TronLink  is not installed, you can install it during chapter 1')
        } else
            disconnect()
    }

    return (
        <button
            className="border-2 border-white opacity-60 rounded-md px-2 my-auto cursor-pointer"
            onClick={(e) => tronConnect(e)}
        >{walletButton}
        </button>
    )
}
