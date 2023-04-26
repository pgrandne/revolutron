import { NextResponse } from 'next/server';
const TronWeb = require('tronweb');
const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = process.env.PRIVATE_KEY_SHASTA;
const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)

export async function POST(request: Request) {
    console.log('initiate gas request')
    try {
        const { address } = await request.json()
        if (typeof privateKey !== "undefined") {
            console.log('start gas request')
            let res = await tronWeb.trx.sendTransaction(address, 10_000_000)
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