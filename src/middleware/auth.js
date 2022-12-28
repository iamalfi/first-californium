
const jwt =require("jsonwebtoken")


exports.authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    let token=req.headers["x-auth-token"]
    if(!token){
        return res.json({status:false,msg:"token is mandatory"})

    }
    let decodedtoken=jwt.verify(token,'functionup-thorium')
    if(!decodedtoken){
        return res.json({status:false,msg:"token is invalid"})
    }

    next()
}


exports.authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let userId=req.params.userId
    let token=req.headers["x-auth-token"]
    if(!token){
        return res.json({status:false,msg:"token is mandatory"})

    }
    let decodedtoken=jwt.verify(token,'functionup-thorium')
    if(!decodedtoken){
        return res.json({status:false,msg:"token is invalid"})
    }

    if(decodedtoken.userId!=userId){
        return res.json({status:false,msg:"unauthorised user"})
    }

    next()
}


