require('dotenv').config()
const express = require('express')
const app = express()
const products_routes = require("./routes/products")
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/connect")


// Middleware or to set routes 
app.use("/api/products",products_routes)

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Started on Port ${PORT}`)
        })
    }catch(err){
        console.log(err)
    }
}
start();