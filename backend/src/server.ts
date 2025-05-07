import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { mainRouter } from "./routes/main";


const server = express();

server.use(cors());
server.use(express.json());
dotenv.config();

server.use("/", mainRouter);

server.listen(process.env.PORT, () => {
    console.log(`server running at ${process.env.PORT}`);
});