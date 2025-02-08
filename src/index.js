// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'
import connectDb from './db/connectDb.js'
import { app } from './app.js'

dotenv.config({
    path:'./env'
})
connectDb()
.then(()=>{
    app.on("error",(error)=>{
        console.log("errr : ",error);
    })
    app.listen(process.env.PORT||3000,()=>{
        console.log(`server start running on port : ${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("mongodb connection failed ",err);   
})

// iffi
/*(async()=>{
    const app=express()
    try{     await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("error ",error);
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log("App start listining");
            
        })
    }
    catch(error){
        console.log("error in db connection",error)
        throw error
    }
})()*/


