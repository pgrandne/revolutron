import { Dispatch, SetStateAction } from "react";

interface ITronLinkParams {
    ready: boolean
    request: any
    sunWeb: any;
    tronWeb: any;
}

declare global {
    interface Window {
        tron: any
        tronLink: ITronLinkParams
    }
}

const bailContract="TKihVzd5pwmFyUidhLCRFFmdyp3fonJkkg"

export const tronTransactionApprove = async ({setLoadingApprove}:{
    setLoadingApprove : Dispatch<SetStateAction<boolean>>
}) => {
    if (window.tronLink.ready) {
        const usddContract="TBukaqWaKjLiqLHtz1czhwLd3iSQVBkHJL"
        const amount = 4000000000
        const tronWeb = window.tronLink.tronWeb
        const address = tronWeb.defaultAddress.base58
        tronWeb.setAddress(usddContract)
        let instance = await tronWeb.contract().at(usddContract)
        let transaction = await instance.approve(bailContract,amount).send()
        console.log(transaction)
        let info = await tronWeb.trx.getConfirmedTransaction(transaction)
        let result = info.ret
        console.log(result[0].contractRet)
        // console.log(info2)
        // info.then((result:any) => {console.log(result.ret.contractRet)})
        // while (info.receipt.result ==! 'SUCCESS' || info.receipt.result ==! 'FAIL') {
        //     info =tronWeb.trx.getTransactionInfo(transaction)
        // }
        setLoadingApprove(false)
    } else
        console.log('tronLink not ready')
}

export const tronTransactionDeposit = async () => {
    if (window.tronLink.ready) {
        const tronWeb = window.tronLink.tronWeb
        const address = tronWeb.defaultAddress.base58
        tronWeb.setAddress(bailContract);
        let instance = await tronWeb.contract().at(bailContract); 
        let result = await instance.depositBail().send();
        console.log(result)
    } else
        console.log('tronLink is not ready')
}