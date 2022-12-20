const router = require('express').Router()
const authorController = require('../controllers/authorController')

router .post("/createauthor",authorController.book_author)
router .post("/createbook",authorController.createBook)
router .get("/findBookByChetanBhagat",authorController.findBookByChetanBhagat)
router .put("/updatePrice",authorController.updatePrice)
router .get("/findAuthors",authorController.findAuthors)

module.exports = router;