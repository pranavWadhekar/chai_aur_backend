import mongoose from "mongoose";
import express from 'express'
import { DB_NAME } from "../constants.js";

const connectDb=async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        console.log(`\n monodoDb connected !! DB HOST : ${connectionInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("MONGODB CONNECTION ERROR" ,error);
        process.exit(1);
    }
}
export default connectDb