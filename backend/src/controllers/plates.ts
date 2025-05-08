import { RequestHandler } from "express";
import { addPlateSchema, updatePlateSchema } from "../schemas/plates";
import { createPlate, excludePlate, takeAvaliabePlates, takePlates, updatePlate } from "../services/plates";

export const getPlates: RequestHandler = async (req, res) => {
    const plate = await takePlates();
    res.json({ plate });
}

export const getAvailabePlates: RequestHandler = async (req, res) => {
    const plate = await takeAvaliabePlates();

    res.json({ plate });
};

export const postPlate: RequestHandler = async (req, res) => {
    const data = req.body;
    if(!data) {
        res.json({ error: "Invalid data" });
        return;
    };

    const safeData = addPlateSchema.safeParse(data);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const plate = await createPlate(safeData.data);
    res.json({ plate });
};

export const deletePlate: RequestHandler = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.json({ error: "Id is required" });
        return;
    };

    const plate = await excludePlate(Number(id));

    res.json({ plate });
};

export const putPlate: RequestHandler = async (req, res) => {
    const id = req.params.id;
    if(!id) {
        res.json({ error: "Id is required" });
    }

    const data = req.body;
    if(!data) {
        res.json({ error: "Invalid data" });
        return;
    };

    const safeData = updatePlateSchema.safeParse(data);
    if(!safeData.success) {
        res.json({ error: safeData.error.flatten().fieldErrors });
        return;
    };

    const plate = await updatePlate(Number(id), safeData.data);
    res.json({ plate });
};
