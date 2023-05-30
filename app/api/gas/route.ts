import { NextResponse } from 'next/server';
const TronWeb = require('tronweb');

const fullNode = 'https://api.trongrid.io';
const solidityNode = 'https://api.trongrid.io';
const eventServer = 'https://api.trongrid.io';
const privateKey = process.env.PRIVATE_KEY_MAINNET;
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)

export async function POST(request: Request) {
    console.log('initiate gas request')
    try {
        const { address } = await request.json()
        if (typeof privateKey !== "undefined") {
            const balance = await tronWeb.trx.getBalance(address)
            if (balance < 50000000) {
                console.log('start gas request')
                const amount = 50000000 - balance
                let res = await tronWeb.trx.sendTransaction(address, amount)
            }
            else {
                const error = new Error('Cannot use faucet because already have TRX')
                error.name = 'balance'
                throw error
            }
        }
        else {
            console.log('no private key')
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