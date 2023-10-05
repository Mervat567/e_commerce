const express=require("express")
const app=express()
require("dotenv").config()
const connection=require('./database').connection
connection()

module.exports=app