const express = require("express");
const router = express.Router();

router.get("/status",(req,res)=>{
    res.status(200).json({
        success: true,
        message:"API dang hoat dong"
    })
})

module.exports=router