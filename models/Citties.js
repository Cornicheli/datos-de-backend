const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    
    name : {Type : String,  required : true},
    continent : {Type : String,  required : true},
    photo : {Type : String, required : true},
    population : {Type : Number, required : true},
    userdId : { Type : String, required : true},
})