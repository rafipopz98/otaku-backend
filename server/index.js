require('dotenv').config();
const express =require('express')
const app=express()
const cors=require('cors')
const {connection} = require('./database');

connection()
const userRoutes = require("./API/routes/user");

// middleware
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)

const port =process.env.PORT ||8000
app.listen(port,()=>console.log(`app running on the port ${port}`))