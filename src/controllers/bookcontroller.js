const bookModel=require("../models/bookModel")


const createBook= async function(req,res){
    let book =req.body
    let savedlist= await bookModel.create(book)
    res.json({msg: "book created successfully",savedlist})
 }  

 const getBooksData= async function (req, res) {
    let books= await bookModel.find()
    res.send({msg: books})
}



module.exports.createBook=createBook
module.exports.getBooksData=getBooksData