const router=require("express").Router()
const newUsercontroller=require("../controllers/newUsercontroller")
const auth = require('../middleware/auth')
// Write a **POST api /users** to register a user from the user details in request body.

router.post("/create-user",newUsercontroller.creatednewUser);
router.post("/login",newUsercontroller.Userlogin);
router.get("/fetchUser/:userId",auth,newUsercontroller.fetchUser);
router.put("/updateUser/:userId",auth,newUsercontroller.updateUser);
router.delete("/deleteUser/:userId",auth,newUsercontroller.deleteUser);



module.exports=router