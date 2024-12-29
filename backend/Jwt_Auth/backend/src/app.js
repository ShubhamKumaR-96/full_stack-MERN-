import express from 'express';
import authRouter from './router/authRouter.js';
import databaseConnect from './config/dbConfig.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

databaseConnect();


const app = express();

app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173"  ,
    credentials:true,
}))


app.use(express.json());

app.use("/api/auth", authRouter)



export default app;