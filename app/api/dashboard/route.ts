import { NextResponse } from 'next/server';
import { getUsers } from '@/utils/prisma/users'

export async function GET() {
    const users = (await getUsers())
    const nbUsers = users.users?.length
    return NextResponse.json({ nbUsers: nbUsers })
}