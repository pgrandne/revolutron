import { Dispatch, SetStateAction } from "react";
import { usddContract,bailContract } from "./contract";

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



export const tronTransactionApprove = async ({setTsx, setTransactionStatus}:{
    setTsx:Dispatch<SetStateAction<string>>
    setTransactionStatus : Dispatch<SetStateAction<{
        loadingApprove: boolean;
        approve: boolean;
        loadingDeposit: boolean;
        deposit: boolean;
    }>>
}) => {
    if (window.tronLink.ready) {
        
        const amount = 4000000000
        const tronWeb = window.tronLink.tronWeb
        const address = tronWeb.defaultAddress.base58
        tronWeb.setAddress(usddContract)
        let instance = await tronWeb.contract().at(usddContract)
        let transaction = await instance.approve(bailContract,amount).send()
        setTsx(transaction)
        // let info = await tronWeb.trx.getConfirmedTransaction(transaction)
        // let result = info.ret
        // console.log(result[0].contractRet)
        // console.log(info2)
        // info.then((result:any) => {console.log(result.ret.contractRet)})
        // while (info.receipt.result ==! 'SUCCESS' || info.receipt.result ==! 'FAIL') {
        //     info =tronWeb.trx.getTransactionInfo(transaction)
        // }
        setTransactionStatus(prevState => ({
            ...prevState,
            loadingApprove: false,
            approve: true
        }))
    } else
        console.log('tronLink not ready')
}

export const tronUsddAllowance = async ({setTransactionStatus}:{
    setTransactionStatus : Dispatch<SetStateAction<{
        loadingApprove: boolean;
        approve: boolean;
        loadingDeposit: boolean;
        deposit: boolean;
    }>>
}) => {
    if (window.tronLink.ready) {
        const tronWeb = window.tronLink.tronWeb
        const address = tronWeb.defaultAddress.base58
        tronWeb.setAddress(usddContract)
        let instance = await tronWeb.contract().at(usddContract)
        let amountAllowed = await instance.allowance(address,bailContract).call()
        if (amountAllowed>=4000000000) {
            setTransactionStatus(prevState => ({
                ...prevState,
                loadingApprove: false,
                approve:true
            }))
        }

    } else 
    console.log('tronLink not ready')
}

export const tronTransactionDeposit = async ({setTsx, setTransactionStatus}:{
    setTsx:Dispatch<SetStateAction<string>>
    setTransactionStatus : Dispatch<SetStateAction<{
        loadingApprove: boolean;
        approve: boolean;
        loadingDeposit: boolean;
        deposit: boolean;
    }>>
}) => {
    if (window.tronLink.ready) {
        const tronWeb = window.tronLink.tronWeb
        const address = tronWeb.defaultAddress.base58
        tronWeb.setAddress(bailContract);
        let instance = await tronWeb.contract().at(bailContract); 
        let result = await instance.depositBail().send();
        setTransactionStatus(prevState => ({
            ...prevState,
            loadingDeposit: false,
            deposit:true
        }))
        console.log(result)
    } else
        console.log('tronLink is not ready')
}