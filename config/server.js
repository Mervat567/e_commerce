const app=require('./app')
require("dotenv").config()
const mongoose=require('mongoose')

const connection=async()=>{
    try{
    await mongoose.connect(process.env.URI)
     console.log('connected to database successfully') 
     app.listen(process.env.PORT,()=>{
        console.log(`server is up on port ${process.env.PORT}`)
       })  
    }catch(err){
     console.log("MongoDB error :" +err)
    }
}

connection()
module.exports=app