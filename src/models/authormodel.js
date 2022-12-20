const mongoose= require("mongoose");

const authorSchema= new mongoose.Schema({
    author_name:String,
    age:Number,
    address:String

},{timestamps:true});

const bookSchema= new mongoose.Schema({
    name:String,
    author_id:mongoose.Types.ObjectId,
    price:Number,
    ratings:Number                  ,

},{timestamps:true});
const authorModel = mongoose.model('author',authorSchema);
const bookModel = mongoose.model('book',bookSchema);
module.exports = {bookModel,authorModel}