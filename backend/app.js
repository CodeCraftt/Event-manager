import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./routes/messageRouter.js";
import cors from "cors";

const app = express();

// dotenv.config({ path: './config/config.env' });
dotenv.config({path:'./config/config.env'})

const corsOptions = {
  origin: process.env.frontendURI,
  methods: ["POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true 
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;