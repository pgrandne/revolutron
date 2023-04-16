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
        tronWeb.setAddress('TBukaqWaKjLiqLHtz1czhwLd3iSQVBkHJL');
        let contract = await tronWeb.contract().at("TBukaqWaKjLiqLHtz1czhwLd3iSQVBkHJL");
        await contract.balanceOf('TE8LvL3gXQuKLU1waU6Ph4WHTKkPdwY6r1').call()
            .then((result:any) => {setBalance(tronWeb.toDecimal(result.toHexString())/(10**6))})
}

useEffect(() => {
    if (typeof address !== "undefined") {
        console.log('1')
        usddBalance()
        console.log(balance)
    
    } 
},[address])

return (
    <div className="opacity-60">Balance: {balance} USDD</div>
)

}