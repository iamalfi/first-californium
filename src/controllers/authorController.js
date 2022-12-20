
const mongoose = require('mongoose')
const {authorModel,bookModel}=require("../models/authormodel") 
// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection
const book_author=async function(req,res){
       const authorData = req.body;
       const author = await authorModel.create(authorData)
       res.json({author});
}

const createBook = async (req, res) => {
       const {name, author_id, price, ratings} = req.body;
       if(!author_id || !mongoose.Types.ObjectId.isValid(author_id)){
              return res.json({msg:'please provide valid author id'})
       }
       const book = await bookModel.create({name,author_id,price,ratings});
       res.json(book);
}
// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
exports.findBookByChetanBhagat = async (req, res) => {
       const author = await authorModel.findOne({author_name:"Chetan Bhagat"})
       const books = await bookModel.find({author_id: author._id})
       res.json(books)
}
// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)
exports.updatePrice = async(req, res) => {
       const updatedBook = await bookModel.findOneAndUpdate({name:"Two states"},{$set: {price: 100}},{new:true});
       const author = await authorModel.findById(updatedBook.author_id)
       res.json({price:updatedBook.price, author_name: author.author_name})
}

// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
exports.findAuthors = async(req, res) => {
       const author_ids = await bookModel.find({price: {$gte: 50, $lte: 100} }).select('author_id');
      
       let names = [];
       for(let i=0; i<author_ids.length; i++){
              const name = await authorModel.findOne({_id:author_ids[i].author_id}).select('author_name');
              names.push(name);
              
       }
       res.json({names})
}
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)








module.exports.book_author=book_author
module.exports.createBook=createBook