import { NextResponse } from 'next/server';
import { createUser, getUserByAddress, updateUser } from '@/utils/prisma/users'

export async function POST(request: Request) {
    try {
        const { message, address, signature, progression } = await request.json()
        // const signingAddress = ethers.utils.verifyMessage(message, signature)
        // if (address !== signingAddress)
        //     return NextResponse.json({ status: 422, message: 'Invalid signature' })
        const user = await getUserByAddress(address)
        if (user) {
            const updatedUser = await updateUser(address, progression)
            console.log('user updated')
        } else {
            const newUser = await createUser(address, progression)
            console.log('user created')
        }
        return NextResponse.json({ ok: true })
    } catch (_error) {
        console.log(_error)
        return NextResponse.json({ ok: false })
    }
}