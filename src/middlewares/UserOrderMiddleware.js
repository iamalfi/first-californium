
// - Update the logic in middleware to set the **isFreeAppUser** attribute in req. Use this attribute in the route handler for setting the isFreeAppUser attributes of User and Order collection. 


const checkHeader = (req,res,next) => {
    let isFreeAppUser = req.get('isFreeAppUser')
    // updated the logic=> set the isFreeAppUser in req object and we are using req.isFreeAppUser in User and Order route handler
    req.isFreeAppUser = isFreeAppUser;
    if(!isFreeAppUser || isFreeAppUser == "" || isFreeAppUser==undefined)
        return res.json({error:'The request is missing a mandatory header'})
    else
        next();
}

module.exports = checkHeader;