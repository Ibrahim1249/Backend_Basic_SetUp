const express = require("express");
const {connectMongoose} = require("./connection")
const userRouter = require("./Routers/user")


const app = express()
const PORT = 8000

// mongoose connection
connectMongoose("mongodb://127.0.0.1:27017/basic_setup").then(()=>{console.log("mongoose is started!!")})

// middlewares
app.use(express.urlencoded({extended:false}))

// router
app.use("/users",userRouter)



app.listen(PORT,()=>{
    console.log("Server is started at ", PORT)
})