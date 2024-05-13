import express from 'express'
import dotenv from 'dotenv/config'
import cors from "cors"
import helemt from 'helmet'
import cookieParser from 'cookie-parser'


const app=express()


app.use(express.json)
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors())
app.use(helemt())


const server=app.listen(8080,()=>{
    console.log(`server running on port 8080`)
})

