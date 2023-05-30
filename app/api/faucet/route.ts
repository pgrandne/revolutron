import { NextResponse } from 'next/server';
import { rusdContract } from "@/utils/contract";

const TronWeb = require('tronweb');
const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io';
const privateKey = process.env.PRIVATE_KEY_MAINNET;
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)

export async function POST(request: Request) {
    console.log('initiate faucet request')
    try {
        const { address } = await request.json()
        if (typeof privateKey !== "undefined" && typeof rusdContract !== "undefined") {
            const instance = await tronWeb.contract().at(rusdContract)
            const result = await instance.balanceOf(address).call()
            const rusdBalance = tronWeb.toDecimal(result.toHexString()) / (10 ** 6)
            if (rusdBalance < 10000) {
                console.log('start faucet request')
                let res = await instance.transfer(address,10000*10**6).send({
                    feeLimit:100_000_000,
                     callValue:0,
                     shouldPollResponse:true
                    });
                }
                else {
                    const error = new Error('Cannot use faucet because already have USDC')
                    error.name = 'balance'
                    throw error
                }
        }
        else {
                const error = new Error('No env variable')
                error.name = 'env'
                throw error
        }
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