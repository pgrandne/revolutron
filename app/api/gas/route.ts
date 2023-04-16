import { NextResponse } from 'next/server';
import { ERC20 } from '@/utils/erc20';
const TronWeb = require('tronweb');
const fullNode = 'https://api.shasta.trongrid.io';
const solidityNode = 'https://api.shasta.trongrid.io';
const eventServer = 'https://api.shasta.trongrid.io';
const privateKey = process.env.PRIVATE_KEY_SHASTA;

export async function POST(request: Request) {
    try {
        const { address } = await request.json()
        const tronWeb = new TronWeb(fullNode,solidityNode,eventServer,privateKey)
        console.log('1')
        if (typeof privateKey !== "undefined") {
            console.log('2')
            tronWeb.trx.sendTransaction(address, 1000)
            console.log('3')
            }
        else {
            const error = new Error('No env variable')
            error.name = 'env'
            throw error
        }
        return NextResponse.json({ status: 200, ok: true })
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