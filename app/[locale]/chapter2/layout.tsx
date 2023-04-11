'use client'

import 'react-toastify/dist/ReactToastify.css';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { TronLink } from '@/app/components'

export default function Chapter2Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode,
}) {
    return (
        <WalletProvider>
            <div className="absolute top-4 left-3 z-30">
                <TronLink />
            </div>
            {children}

        </WalletProvider>
    );
}