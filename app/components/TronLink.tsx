import { useState } from "react";

interface ITronLinkParams {
    ready: boolean
    request: any
    sunWeb: any;
    tronWeb: any;
}

declare global {
    interface Window {
        tronWeb: any
        tronLink: ITronLinkParams
    }
}

const TronLink = () => {
    const [wallet, setWallet] = useState(false)
    const [walletButton, setWalletButton] = useState('Connect TronLink')
    const getTronWeb = async () => {
        let tronWeb;
        if (typeof window !== 'undefined' && typeof window.tronLink !== 'undefined') {
            if (window.tronLink.ready) {
                tronWeb = window.tronWeb;
                setWalletButton(window.tronWeb.defaultAddress.base58)
                console.log(tronWeb)
            } else {
                window.alert('Please unlock your TronLink')
            }
            return tronWeb;
        } else {
            window.alert('Wallet TronLink  is not installed')
        }
    }

    return (
        <div
            className="border-2 border-white opacity-60 rounded-md px-2 my-auto cursor-pointer"
            onClick={() => getTronWeb()}
        >{walletButton}
        </div>
    )
}

export default TronLink