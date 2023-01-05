//commun js import

const express = require('express')
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')



//router.get('/', (req, res) => res.status(200).json({message :"Get goals"}));
router.get('/', getGoals);


//router.post('/', (req, res) => res.status(200).json({message :"Set goals"}));

router.post('/', setGoal);


//router.put('/:id', (req, res) => res.status(200).json({message :`Update goals ${req.params.id} `}));
router.put('/:id', updateGoal);


//router.delete('/:id', (req, res) => res.status(200).json({message :`Delete goals ${req.params.id} `}));

router.delete('/:id', deleteGoal);




//alternative routes
router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete( deleteGoal).put(updateGoal)


module.exports = router


















// const express = require('express')
// const router = express.Router()
// const {
//   getGoals,
//   setGoal,
//   updateGoal,
//   deleteGoal,
// } = require('../controllers/goalController')

// const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(protect, getGoals).post(protect, setGoal)
// router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

// module.exports = router
