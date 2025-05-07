import { prisma } from "../utils/prisma";
import bcrypt from "bcrypt";

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

export const takeUsers = async () => {
    const users = await prisma.user.findMany();

    return users;
};

export const excludeUser = async (id: number) => {
    try{
        const user = await prisma.user.delete({
            where: {
                id: id
            }
        });
        return user;
    } catch {
        return "User does not exist";
    }
};

export const updateUser = async (userId: number, email: string, password: string) => {
    try{
        let user;

        if(password) {
            const hashPassword = await bcrypt.hash(password, 10);
    
            user = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    email,
                    password: hashPassword
                }
            });
        } else {
            user = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    email,
                    password
                }
            });
        }
        return user;
    } catch {
        return "User does not exist"
    }
};