const book = require("../models/book")
const bookModel=require("../models/book")
const router = require("../routes/route")


// createBook : to create a new entry..use this api to create 11+ entries in your collection
const createBook= async (req,res)=>{
    let result=req.body
    let book= await bookModel.create(result)
    res.json({msg:"created Successfully",book})
}
// bookList : gives all the books- their bookName and authorName only

const bookList= async ( req,res)=>{
    let list=await bookModel.find().select("bookName authorName")
    res.json(list);
}

// getBooksInYear: takes year as input in post request and gives list of all books published that year
const getBookInYear= async(req,res)=>{
    let year=req.body.year
    let books=await bookModel.find({year:year})
    res.json(books)
}
// getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition 	
// e.g if body had { name: “hi”} then you would fetch the books with this name
// if body had { year: 2020} then you would fetch the books with this name
// hence the condition will differ based on what you input in the request body

const getParticularBooks= async (req,res)=>{
  let {name,year}=req.body
  let books  = await book.find({$or: [{bookName:name}, {year:year}]})
  res.json(books)

}


// getXINRBooks- request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR”

const getXINRBooks = async (req, res)   => {
    const books = await book.find({'price.indianPrice': {$in: ["100INR","300INR", "500INR"]}});
    res.json(books)
}


// getRandomBooks - returns books that are available in stock or have more than 500 pages 

const getRandomBooks=async(req,res)=>{
    let books= await book.find({$or:[{stockAvailable:true}, {totalPages: {$gt: 500}}]})
    // console.log(books)
    res.json(books)
}

module.exports.getBookInYear=getBookInYear
module.exports.bookList=bookList
module.exports.createBook=createBook
module.exports.getParticularBooks=getParticularBooks
module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks
