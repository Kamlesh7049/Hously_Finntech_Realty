// Dependancy import
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express()

// File import
import userRoute from './Routes/userRoute.js'


// Dependancy uses
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    methods: ["POST", "GET", "PUT", "PUT", "PATCH"],
    credentials: true
}))
app.use(morgan("dev"))


app.use('/auth/user', userRoute)


export default app;

