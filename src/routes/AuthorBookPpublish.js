const router=require("express").Router()

const Authorcontroller=require("../controllers/newAuthorcontroller")
const Bookcontroller=require("../controllers/newBookcontroller")
const Publishercontroller=require("../controllers/newPublishercontroller")


router.post('/create-author',Authorcontroller.createNewAuthor);
router.post("/createPublisher",Publishercontroller.createPublisher)
router.post("/bookcreate",Bookcontroller.bookcreate)
router.get("/getbookdetails",Bookcontroller.getbookdetails)
router.put("/updatebook",Bookcontroller.updateBook)
router.put("/updateprice",Bookcontroller.updatePrice)
module.exports=router