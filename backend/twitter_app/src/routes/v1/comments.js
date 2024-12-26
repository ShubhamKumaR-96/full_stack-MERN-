import express from 'express'
import { getComment } from '../../controllers/tweetController.js';

const router=express.Router();

router.use("/",getComment)

export default router