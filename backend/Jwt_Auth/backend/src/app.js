import express from 'express';
import authRouter from './router/authRouter.js';
import databaseConnect from './config/dbConfig.js';

databaseConnect();

const app = express();
app.use(express.json());

app.use("/api/auth", authRouter)



export default app;