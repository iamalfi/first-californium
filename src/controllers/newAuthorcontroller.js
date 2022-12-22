const AuthorModel=require("../models/newAuthormodel")


// 1. Write a POST api that creates an author from the details in request body

exports.createNewAuthor=async(req,res)=>{
    let body=req.body
    const newAuthor=await AuthorModel.create(body)
    res.json(newAuthor)
}
// // The authorId is present in the request body. If absent send an error message that this detail is required
// exports.isPresent=async(req,res){

// }