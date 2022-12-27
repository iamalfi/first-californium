const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    let token = req.get('access-token')
    if(!token){
        return res.json({status:false,msg:'token must be present'});
    }
    const decodedToken = jwt.verify(token,"thisissecretkey");
    if(!decodedToken){
        return res.json({status:false,msg:'token is not valid'});
    }
    next();
}

module.exports = auth;