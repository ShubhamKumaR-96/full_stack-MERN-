import express from "express"

const router=express.Router();

router.get('/',(req,res)=>{
    return res.json({
        msg:"Welcome to the tweet route v2"
    })
})

router.get('/:id',(req,res)=>{
    return res.json({
        msg:"Welcome to my tweet profile",
        id:req.params.id
    })
})

export default router;