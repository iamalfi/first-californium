const newpublishermodel=require("../models/newpublishermodel")



// / 2. Write a POST api that creates a publisher from the details in the request body
exports.createPublisher=async (req,res) => {
    let body=req.body
    const publisher=await newpublishermodel.create(body)
    res.json(publisher)
}