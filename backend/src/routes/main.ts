import express from "express";
import * as mainController from "../controllers/main";

export const mainRouter = express.Router();

mainRouter.get("/ping", mainController.ping);
