const express = require('express')
const router = express.Router()
const {getGoals,updateGoal,createGoals,deleteGoal} = require('../controllers/goalController')
const {protect} = require('../middleware/authMiddleware')

router.get('/',protect,getGoals)
router.post('/',protect,createGoals)

// router.route('/').get(getGoals).post(createGoals) -->The above two lines can be written in this way to save even more space. This is used when a route is repeated several times.

router.put('/:id',protect,updateGoal)
router.delete('/:id',protect,deleteGoal)

// router.route('/:id').put(updateGoal).delete(deleteGoal) 

module.exports=router