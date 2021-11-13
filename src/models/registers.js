const mongoose = require("mongoose");

const employeeschema = new mongoose.Schema({
    username: {
        type : String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})
  


const Login = new mongoose.model("Login",employeeschema); 

module.exports = Login;