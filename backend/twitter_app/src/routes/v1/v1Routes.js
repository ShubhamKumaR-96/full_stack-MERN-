import express from 'express'
import tweetRouter from './tweet.js'
import commentsRouter from './comments.js'


const router=express.Router()

router.use('/tweets',tweetRouter)
router.use('/comments',commentsRouter)


export default router;