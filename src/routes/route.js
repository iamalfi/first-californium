const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")
const UserProdOrderController = require('../controllers/UserProdOrderConotroller');
const checkHeader = require('../middlewares/UserOrderMiddleware');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", commonMW.abc, BookController.createBook  )
router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)

router.post('/create-product',UserProdOrderController.createProduct)
router.post('/create-user',checkHeader,UserProdOrderController.createUser)
router.post('/create-order',checkHeader,UserProdOrderController.createOrder)
module.exports = router;