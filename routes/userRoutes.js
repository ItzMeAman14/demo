const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{

    res.send("User Default Page...");
});

router.get("/home",(req,res)=>{

    res.send("User Home Page...");

});

module.exports = router ; 

