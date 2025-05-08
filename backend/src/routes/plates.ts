import express from "express";
import * as plateController from "../controllers/plates";

export const platesRouter = express.Router();

platesRouter.get("/", plateController.getPlates);
platesRouter.get("/availables", plateController.getAvailabePlates);
platesRouter.post("/", plateController.postPlate);
platesRouter.delete("/:id", plateController.deletePlate);
platesRouter.put("/:id", plateController.putPlate);