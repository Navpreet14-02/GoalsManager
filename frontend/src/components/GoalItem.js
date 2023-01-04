import React from 'react'
import { useDispatch } from 'react-redux'
import goalService from '../features/Goals/goalService'
import { deleteGoal } from '../features/Goals/goalSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch()
  return (
    <div className='goal'>
        <div className="">
            {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
        <button onClick={()=>dispatch(deleteGoal(goal._id))} className="close">X</button>
    </div>
  )
}

export default GoalItem