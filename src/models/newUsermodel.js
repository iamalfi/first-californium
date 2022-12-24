const mongoose= require("mongoose");

const newUserSchema= new mongoose.Schema({
    name: String,
	balance:{
        type:Number,
        default:100  
    }, 
	address:String,
	age: Number,
 	gender:String,// Allowed values are - “male”, “female”, “other”
	isFreeAppUser:{
        type:Boolean,
        dafault:false
    },  // Default false value.

},{timestamps:true})

module.exports= mongoose.model("user",newUserSchema)