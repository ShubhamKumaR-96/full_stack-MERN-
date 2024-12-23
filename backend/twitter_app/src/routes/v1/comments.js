import express from 'express'

const router=express.Router();

router.get('/',(req,res)=>{
    res.json({
        msg : "Welcome to the comment section"
    })
})

router.get('/:id',(req,res)=>{
    res.json({
        comment:"What a comments man on your posts"
    })
})

export default router;