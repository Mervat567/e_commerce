const mongoose=require("mongoose")

let productSchema=mongoose.Schema({
  name:{type:String,required:true},
  price:{type:Number,required:true},
  description:{type:String,required:true},
  image:[{type:Object}],

})

let productModel=mongoose.model("product",productSchema)

module.exports=productModel