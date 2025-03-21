// Dependancy import
import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { config } from "dotenv";

config();

const app = express();

// File import
import userRoute from "./Routes/userRoute.js";
import cibilRoute from "./Routes/CibilScoreRoute.js";
import chatBotRoute from "./Routes/chatBotRoute.js";
import offerRoute from "./Routes/offferRoute.js";

// Dependancy uses
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URI,
    methods: ["POST", "GET", "PUT", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth/user", userRoute);
app.use("/auth/cibil", cibilRoute);
app.use("/api/chatbot", chatBotRoute);
app.use("/api/offer", offerRoute);

export default app;
