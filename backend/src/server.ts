import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainRouter } from "./routes/main";
import { authRouter } from "./routes/auth";
import { platesRouter } from "./routes/plates";

const server = express();

server.use(cors());
server.use(express.json());
dotenv.config();

server.use("/", mainRouter);
server.use("/auth", authRouter);
server.use("/plates", platesRouter);

server.listen(process.env.PORT, () => {
    console.log(`server running at ${process.env.PORT}`);
});