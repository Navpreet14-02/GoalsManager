const express = require('express')
const router = express.Router()
const {getGoals,updateGoal,createGoals,deleteGoal} = require('../controllers/goalController')


router.get('/',getGoals)
router.post('/',createGoals)

// router.route('/').get(getGoals).post(createGoals) -->The above two lines can be written in this way to save even more space. This is used when a route is repeated several times.

router.put('/:id',updateGoal)
router.delete('/:id',deleteGoal)

// router.route('/:id').put(updateGoal).delete(deleteGoal) 

module.exports=router