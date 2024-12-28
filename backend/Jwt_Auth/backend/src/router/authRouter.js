import express from "express";
import { signin, signUp } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signin);

export default authRouter;
