// Instead of writing our functionality in the callback functions of each request it is better to use controller files 

const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const Goal=require('../models/goalModel')
const User = require('../models/userModel')

// @desc Get goals
// @route GET /api/goals
// @access Private


// When we use Mongoose in each of these functions to interact with the database it sends back a promise due to which we should use async await


const getGoals = asyncHandler( async (req,res)=>{

    const goals = await Goal.find({user: req.user.id});

    res.status(200).json(goals)
})

// @desc Create Goal
// @route POST /api/goals
// @access Private

const createGoals = asyncHandler( async (req,res)=>{
    if(!req.body.text){
        res.status(400) //.json({message:'Please add a text field'})
        throw new Error('Please add a text field') // -> Using the express inbuilt error handler
    }

    const goal = await Goal.create({
        text:req.body.text,
        user:req.user.id,
    })

    res.status(200).json(goal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private

const updateGoal= asyncHandler( async (req,res)=>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedGoal)

})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private

const deleteGoal= asyncHandler(async (req,res)=>{

    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400);
        throw new Error('Goal Is Deleted Already')
    }

    const user = await User.findById(req.user.id)

    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(goal.user.toString()!==user.id){
        res.status(401)
        throw new Error('User not authorized')
    }


    await goal.remove().catch((err)=>console.log(err))

    res.status(200).json({id:req.params.id})

}) 


module.exports={
    getGoals,createGoals,updateGoal,deleteGoal
}