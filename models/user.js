const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});

mongoose.model('User',userSchema);  

// {
//     "fname":"Swastik",
//     "lname":"Singh",
//     "contact":"+919695953090",
//     "email":"9920103039@mail.jiit.ac.in",
//     "password":"abcdefg",

// }