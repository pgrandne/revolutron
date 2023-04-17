const TronWeb = require('tronweb');
const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const tronWeb = new TronWeb(fullNode,solidityNode,)
import { useWallet } from '@tronweb3/tronwallet-adapter-react-hooks';
import { useEffect, useState } from 'react';

export const BalanceUsdd = () => {
    const { address } = useWallet()
    const [balance, setBalance] = useState(0)
    const usddBalance = async () => {
        tronWeb.setAddress(process.env.USDD);
        let contract = await tronWeb.contract().at(process.env.USDD);
        await contract.balanceOf(address).call()
            .then((result:any) => {setBalance(tronWeb.toDecimal(result.toHexString())/(10**6))})
}
useEffect(() => {
    if (typeof address !== "undefined")
        usddBalance()
},[address])

return (
    <div className="opacity-60">Balance: {balance} USDD</div>
)
}