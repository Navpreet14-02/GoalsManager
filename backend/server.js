const express = require('express')
const dotenv = require('dotenv').config()// --> Allow us to have dotenv file with our variables in it.
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const port =process.env.PORT || 5000
const app =express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
// The above middlewares are to use body of the request


app.use('/api/goals',require('./routes/goalRoutes')) // --> This line implies that whenever we send a request to this endpoint it will direct us to specified value in require() and serve the request
app.use('/api/users',require('./routes/userRoutes'))

app.use(errorHandler) // --> It will overwrite the default express error handler

app.listen(port,()=>{
    console.log(`Server started on ${port}`);
})