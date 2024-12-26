import express from "express"
import { createTweets, getTweetId, getTweets } from "../../controllers/tweetController.js";
import { createManualTweetValidator } from "../../validators/tweetsValidators.js";

const router=express.Router();

router.get("/",getTweets)
router.get("/:id",getTweetId)
router.post("/", createManualTweetValidator,  createTweets)


export default router;