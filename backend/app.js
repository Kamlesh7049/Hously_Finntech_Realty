import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express()
 app.use(express.json())
 app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    app.use(morgan("dev"))
    app.get("/", (req, res) => {
        res.json({ message: "Welcome to the backend" })
    })

export default app;

