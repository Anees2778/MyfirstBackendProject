const mongoose = require("mongoose");

const dueList = new mongoose.Schema({
    S_id:{
        type:Number,
        require:true
    },
    dueCost:{
        type:Number,
        require:false,
    },
    detail:{
        type:String,
        require:false
    }

});
const dueList = new mongoose.model("StudentDueList", duelist);

module.exports = StudentDueList;