import prisma from '.'
import { IProgression } from '../interface'

export async function getUsers() {
    try {
        await prisma.$connect()
        const users = await prisma.user.findMany()
        await prisma.$disconnect()
        return { users }

    } catch (error) {
        await prisma.$disconnect()
        return { error }
    }
}

export async function createUser(address: string, progression: IProgression) {
    try {
        const creationDate = new Date()
        await prisma.$connect()
        const userFromDB = await prisma.user.create({
            data: {
                address: address,
                createdAt: creationDate,
                lastUpdate: creationDate,
                chapter: progression.chapter,
                episode: progression.episode,
                scene: progression.scene
            }
        })
        await prisma.$disconnect()
        return { user: userFromDB }
    } catch (error) {
        await prisma.$disconnect()
        return { error }
    }
}

export async function updateUser(address: string, progression: IProgression) {
    try {
        const updateDate = new Date()
        await prisma.$connect()
        const userFromDB = await prisma.user.update({
            where: { address: address },
            data: {
                lastUpdate: updateDate,
                chapter: progression.chapter,
                episode: progression.episode,
                scene: progression.scene
            }
        })
        await prisma.$disconnect()
        return { user: userFromDB }
    } catch (error) {
        await prisma.$disconnect()
        return { error }
    }
}

export async function getUserByAddress(address: string) {
    try {
        await prisma.$connect()
        const user = await prisma.user.findUnique({ where: { address } })
        await prisma.$disconnect()
        return user
    } catch (error) {
        await prisma.$disconnect()
        return (error)
    }
}