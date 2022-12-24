const User = require('../models/newUsermodel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');
const orderModel = require('../models/orderModel');
const { default: mongoose } = require('mongoose');

// - Write a POST api to create a product from the product details in request body. 

exports.createProduct = async(req, res) => {
    const product = req.body;
    const createdProduct = await Product.create(product);
    res.json({msg:'product created successfully',product:createdProduct});
}

// - Write a POST api to create a user that takes user details from the request body. If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header. The value of field isFreeAppUser in a user document is determined by **isFreeAppUser** request header.

exports.createUser = async (req, res) => {
    const user = req.body;
    let isFreeAppUser = req.isFreeAppUser
    // console.log(isFreeAppUser);
    const createdUser = await User.create({...user,isFreeAppUser})
    res.json({msg:'user created successfully',user:createdUser});
}
// Write a POST api for order purchase that takes a userId and a productId in request body. 
// If the header **isFreeAppUser** is not present terminate the request response cycle with an error message that the request is missing a mandatory header.
// If the header is present the control goes to the request handler. Perform the user and product validation. Check if the user exists as well as whether the product exists. Return an error with a suitable error message if either of these validations fail





// For every purchase we save an order document in the orders collection. isFreeAppUser property in an Order document depends on the header **isFreeAppUser**. If the **isFreeAppUser** header is true then the balance of the user is not deducted and the amount in order is set to 0 as well the attribute in order **isFreeAppUser** is set to true. If this header has a false value then the product’s price is checked. This value is deducted from the user’s balance and the order amount is set to the product’s price as well as the attrbiute **isFreeAppUser** is set to false in order document.



// ### Hints for problem 3

// 1. Validate the header in a middleware. Terminate the req-res cycle if this fails.
// 2. Validate the userId. Send error if userId is invalid
// 3. Validate the productId. Send the error if productId is invalid
// 4. Now write the logic for order creation. 3 scenarios
// - //Scenario 1
// For paid user app and the user has sufficient balance. We deduct the balance from user's balance and update the user. We create an order document

// - //Scenaio 2
// For paid app user and the user has insufficient balance. We send an error that the user doesn't have enough balance

// - //Scenario 3
// For free app user, we dont check user's balance and create the order with 0 amount.

exports.createOrder=async(req,res)=>{
    let {userId,productId,amount,date}=req.body;
    let isFreeAppUser = req.isFreeAppUser
    
    if(!userId || !mongoose.Types.ObjectId.isValid(userId)){
        return res.json({error: 'please provide a valid userId'})
    }
    if(!productId || !mongoose.Types.ObjectId.isValid(productId)){
        return res.json({error: 'please provide a valid productId'})
    }
    const user = await User.findById(userId);
    if(!user){
        return res.json({status:'error',msg:'User does not exist'})
    }
    const product = await Product.findById(productId);
    if(!product){
        return res.json({status:'error',msg:'product does not exist so you can not order'})
    }
    // 3rd sceneario
    let createdorder;
    if(isFreeAppUser == 'false' && user.balance < 100){
        return res.json({msg:'user doesn\'t have enough balance'})
    }
    // 1st scenario
    else if(isFreeAppUser == 'false' && user.balance>=100){
        let updatedBalance = user.balance - product.price;
        await User.findByIdAndUpdate(user._id,{$set: {balance:updatedBalance}})
        createdorder = await Order.create({userId,productId,amount,isFreeAppUser,date});
    }
    // 2nd scenario
    else if (isFreeAppUser == 'true'){
        amount = 0;
        createdorder=await Order.create({userId,productId,amount,isFreeAppUser,date});
    }
    res.json({msg:'order created successfully',order:createdorder});
}


