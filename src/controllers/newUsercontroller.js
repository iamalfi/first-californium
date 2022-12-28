const newUsermodel=require("../models/newUsermodel")

const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

exports.creatednewUser=async(req,res)=>{
    let body=req.body
    try {
        const newUser=await newUsermodel.create(body)
    res.status(201).json({msg:"User created Successfully",user:newUser})
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}
// - Write a ***POST api /login** to login a user that takes user details - email and password from the request body. If the credentials don't match with any user's data return a suitable error.
// On successful login, generate a JWT token and return it in response body. 
exports.Userlogin=async(req,res)=>{
    let {emailId ,password}=req.body
    try {
        const user = await newUsermodel.findOne({emailId:emailId,password:password})    
    if(!user){
        return res.status(404).json({status:false,msg:"user doesn't exist "})
    }
    const token = jwt.sign({userId:user._id.toString(),email:user.emailId},"thisissecretkey");

    res.setHeader('access-token',token);
    res.status(200).json({status:true,token:token})
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}

// - Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
// If present, check that the token is valid.

exports.fetchUser = async (req, res) => {
    let userId = req.params.userId;
    try {
        if(!userId || !mongoose.Types.ObjectId.isValid(userId)){
            return res.status(403).json({status:false,msg:'userId is required'})
        }
        const user = await newUsermodel.findById(userId);
        res.status(200).json({status:true,msg:'success',user})
    } catch (err) {
        res.status(500).json({msg:err.message})
    }
}

// - Write a **PUT api /users/:userId** to update user details. Pass the userId as path param in the url and update the attributes received in the request body. Check that request must contain **x-auth-token** header. If absent, return a suitable error.
exports.updateUser = async (req, res) => {
    let userId = req.params.userId;
    let data = req.body;

   try {
    if(!userId || !mongoose.Types.ObjectId.isValid(userId)){
        return res.status(403).json({status:false,msg:'userId is required'})
    }
    const updatedUser = await newUsermodel.findByIdAndUpdate(userId,data,{new:true});
    res.status(200).json({status:true,msg:'user updated successfully',updatedUser});
   } catch (err) {
    res.status(500).json({msg:err.message})
   }
}

// - Write a **DELETE api /users/:userId** that takes the userId in the path params and marks the isDeleted attribute for a user as true. Check that request must contain **x-auth-token** header. If absent, return a suitable error.

exports.deleteUser = async (req, res) => {
    let userId = req.params.userId;
   
    try {
        if(!userId || !mongoose.Types.ObjectId.isValid(userId)){
            return res.status(403).json({status:false,msg:'userId is required'})
        }
        const update = await newUsermodel.findByIdAndUpdate(userId,{$set:{isDeleted:true}},{new:true});
        res.status(200).json({status:true,msg:"user marked as deleted",deletedUser:update})
    } catch (err) {
        res.status(500).json({msg:err.message})   
    }

}