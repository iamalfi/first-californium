const mongoose=require("mongoose")

const newBookSchema=new mongoose.Schema({
    name:String,
		author_id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:"author"
        },
	       price:Number,
		ratings:Number,
		publisher:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"publisher"
        },
        isHardCover:{
          typr:Boolean,
          default:false
      }

},{timestamps:true})


module.exports=mongoose.model("books",newBookSchema)