const { default: mongoose } = require("mongoose")
const newAuthormodel = require("../models/newAuthormodel")
const newbookmodel=require("../models/newbookmodel")
const newpublishermodel = require("../models/newpublishermodel")


// 3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
// The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
// The publisherId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.


exports.bookcreate=async(req,res)=>{
    let body=req.body
    if(!body.author_id || !mongoose.Types.ObjectId.isValid(body.author_id)){
        return res.json({msg:"author_id is required to create book or the author_id is not valid"})
    }
    if(!body.publisher || !mongoose.Types.ObjectId.isValid(body.publisher)){
        return res.json({msg:"publisher is required to create book or the publisher is not valid"})
    }
    const books=await newbookmodel.create(body)
    res.json(books)

}

// Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

exports.getbookdetails=async(req,res)=>{
    const getbooks=await newbookmodel.find().populate("author_id").populate("publisher")
    res.json(getbooks)
}

// Create a new PUT api /books and perform the following two operations
//  a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
 

exports.updateBook=async(req,res)=>{

   const publishers=await newpublishermodel.find({name: {$in: ["Penguin", "HarperCollins"]}})
   let updated = [];
    for(let i = 0; i < publishers.length; i++){
    const updatedBook =  await newbookmodel.findOneAndUpdate({publisher:publishers[i]._id},{$set: {isHardCover:true}},{new:true})
    updated.push(updatedBook);
   }
   res.json(updated)
}

// b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)

exports.updatePrice = async (req, res) => {
    const authors = await newAuthormodel.find({rating: {$gt: 3.5}});
    let updatedBooks = [];
    for(let i = 0; i < authors.length; i++){
        const book = await newbookmodel.findOne({author_id:authors[i]._id});
       
        book.price = book.price + 10;
        updatedBooks.push(book)
       }
    res.json(updatedBooks)
}