import express from "express";
import * as mainController from "../controllers/main";

export const mainRouter = express.Router();

mainRouter.get("/ping", mainController.ping);

mainRouter.get("/users", mainController.getUsers);
mainRouter.delete("/users/:id", mainController.deleteUser);
mainRouter.put("/users/:id", mainController.putUser);