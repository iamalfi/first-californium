const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const book=require("../controllers/book")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.post("/book/createBook",book.createBook)
router.get("/book/bookList",book.bookList)
router.post("/book/getInyear",book.getBookInYear)
router.get("/book/getRandomBooks",book.getRandomBooks)
router.get("/book/getParticularBooks",book.getParticularBooks)
router.get("/book/getXINRBooks",book.getXINRBooks)



module.exports = router;