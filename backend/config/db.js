// This file will be used to connect to our mongodb database
const mongoose = require('mongoose')


// All mongoose methods are asynchronous
const connectDB = async()=>{
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI) //--> to connect to the database

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB