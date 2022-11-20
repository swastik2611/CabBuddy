const express = require('express')
const mongoose = require('mongoose')

const router = express.Router();
const User = mongoose.model('User');

router.post('/signup',async (req,res)=>{
   const{fname,lname,contact,email,password}=req.body;
   try{
    const user = new User({fname,lname,contact,email,password});
    await user.save();
    res.send("ok");
   }catch(err){
       return res.status(422).send(err.message);
   }
   
    
});

module.exports = router;