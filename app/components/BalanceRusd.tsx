const TronWeb = require('tronweb');
const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const tronWeb = new TronWeb(fullNode, solidityNode,)
import { rusdContract } from '@/utils/contract';
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { useEffect, useState } from 'react';

export const BalanceRusd = () => {
    const { address } = useWallet()
    const [balance, setBalance] = useState(0)
    const usddBalance = async () => {
        tronWeb.setAddress(rusdContract);
        let contract = await tronWeb.contract().at(rusdContract);
        await contract.balanceOf(address).call()
            .then((result: any) => { setBalance(tronWeb.toDecimal(result.toHexString()) / (10 ** 6)) })
    }
    useEffect(() => {
        if (typeof address !== "undefined" && address?.charAt(0) === 'T')
            usddBalance()
    }, [address])

    return (
        <div className="opacity-60">Balance: {balance} RUSD (no real value)</div>
    )
}