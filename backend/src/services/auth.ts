import { prisma } from "../utils/prisma"

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    });

    return user;
};

export const createUser = async (email: string, password: string) => {
    const user = await prisma.user.create({
        data: {
            email,
            password
        }
    });

    return user;
};