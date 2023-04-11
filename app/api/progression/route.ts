import { NextResponse } from 'next/server';
import { getUserByAddress } from '@/utils/prisma/users'

export async function POST(request: Request) {
    try {
        let path
        const { address, locale } = await request.json()
        const user = await getUserByAddress(address)
        if (user) {
            path = `/${locale}/chapter${user.chapter}/scene${user.episode}`
            return NextResponse.json({ path: path })
        } else {
            path = `/${locale}/chapter1/scene1`
            // res.setHeader('Content-Type', 'text/plain')
            // res.send(path)
            console.log('no user')
        }
    } catch (_error) {
        console.log(_error)
        return NextResponse.json({ ok: false })
    }
}