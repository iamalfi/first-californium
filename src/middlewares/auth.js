const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    try {
        
        let token = req.get('access-token')
        if(!token){
            return res.json({status:false,msg:'token must be present'});
        }
        const decodedToken = jwt.verify(token,"thisissecretkey");
        if(!decodedToken){
            return res.json({status:false,msg:'token is not valid'});
        }
    } catch (err) {
        res.status(500).send({ msg: "Error", error: err.message })
    }
    next();
}

module.exports = auth;