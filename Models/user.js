
const mongoose = require("mongoose");
const { type } = require("os");


const userSchema = new mongoose.Schema({
    first_name :{
        type : string,
        required:true
    },
    last_name : {
        type:string
    },
    email:{
        type:string,
        required:true,
        unique : true
    },
    gender : {
       type : string
    },
    job_title : {
        type:string
    }
})

const User = mongoose.model("users",userSchema)

module.exports = User