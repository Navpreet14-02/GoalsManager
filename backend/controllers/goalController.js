// Instead of writing our functionality in the callback functions of each request it is better to use controller files 

const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @access Private


// When we use Mongoose in each of these functions to interact with the database it sends back a promise due to which we should use async await


const getGoals = asyncHandler( async (req,res)=>{
    res.status(200).json({message:'Get goals'})
})

// @desc Create Goal
// @route POST /api/goals
// @access Private

const createGoals = asyncHandler( async (req,res)=>{
    if(!req.body.text){
        res.status(400) //.json({message:'Please add a text field'})
        throw new Error('Please add a text field') // -> Using the express inbuilt error handler
    }

    res.status(200).json({message:'Create goals'})
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal= asyncHandler( async (req,res)=>{
    res.status(200).json({message:`Update goal: ${req.params.id}`})

})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal= asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete goal: ${req.params.id}`})

}) 


module.exports={
    getGoals,createGoals,updateGoal,deleteGoal
}