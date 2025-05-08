import { z } from "zod";
import { prisma } from "../utils/prisma";
import { addPlateSchema, updatePlateSchema } from "../schemas/plates";

export const takePlates = async () => {
    const plates = await prisma.plate.findMany();

    return plates;
};

export const takeAvaliabePlates = async () => {
    const plates = await prisma.plate.findMany({
        where: {
            available: true
        }
    });

    return plates;
};

export const createPlate = async (data: z.infer<typeof addPlateSchema>) => {
    try{
        const plate = await prisma.plate.create({
            data
        });
        
        return plate;
    } catch {
        return "Invalid plate"
    };
};

export const excludePlate = async (id: number) => {
    try{
        const plate = await prisma.plate.delete({
            where: {
                id
            }
        });
        
        return plate;
    } catch  {
        return "Invalid plate";
    };
};

export const updatePlate = async (id: number, data: z.infer<typeof updatePlateSchema>) => {
    const plate = await prisma.plate.update({
        where: {
            id
        },
        data
    });

    return plate;
};