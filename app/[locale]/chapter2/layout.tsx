'use client'

import 'react-toastify/dist/ReactToastify.css';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { BalanceUsdd, TronLink } from '@/app/components'
import { useState } from 'react';

export default function Chapter2Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    const [wallet, setWallet] = useState(false)
    return (
        <WalletProvider>
            <div className="absolute top-4 left-3 z-30">
                <TronLink setWallet={setWallet} />
                <BalanceUsdd />
            </div>
            {children}

        </WalletProvider>
    );
}