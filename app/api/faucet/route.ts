import { NextResponse } from 'next/server';
import { ERC20 } from '@/utils/erc20'
const TronWeb = require('tronweb');
const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = process.env.PRIVATE_KEY_SHASTA;

export async function POST(request: Request) {
    try {
        // const { address } = await request.json()
        // const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)
        // if (typeof process.env.PRIVATE_KEY !== "undefined" && typeof process.env.USDD_CONTRACT !== "undefined") {
        //         let instance = await tronWeb.contract().at(process.env.USDD_CONTRACT)
        //         let res = await instance.transfer(address,500).send({
        //             feeLimit:100_000_000,
        //             callValue:0,
        //             shouldPollResponse:true
        //         });
        //     }
        // else {
        //         const error = new Error('No env variable')
        //         error.name = 'env'
        //         throw error
        // }
        return NextResponse.json({ status: 200 })
    } catch (_error) {
        console.error(_error)
        switch (_error.name) {
            case 'env':
                return NextResponse.json({
                    message: _error.message
                }, {
                    status: 422,
                })
            case 'balance':
                return NextResponse.json({
                    message: _error.message
                }, {
                    status: 423,
                })
            default:
                return NextResponse.json({
                    message: "Unknown error"
                }, {
                    status: 500,
                })
        }
    }
}