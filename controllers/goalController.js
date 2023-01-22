const Goal = require('../models/goalModel')
const User = require('../models/userModel')



// @desc    Get goals
// @route   GET /api/goals
//const getGoals = async(req, res) => res.status(200).json({message :"Get goals"})

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (async (req, res) => {
  const goals = await Goal.find()

  res.status(200).json(goals)
})
// @desc    Get goals
// @route   GET /api/goals
// @access  Private
// const getGoals = (async (req, res) => {
//   const goals = await Goal.find({ user: req.user.id })

//   res.status(200).json(goals)
// })







// @desc    Set goal
// @route   POST /api/goals
//const setGoal = (req, res) => res.status(200).json({message :"Set goals"})
// const setGoal = async(req, res) => {
//   console.log(req.body.text)
//   console.log(req.body.name)
//   console.log(req.body.Date)
//   if (!req.body.text) {
//     res.status(400)
//     throw new Error('Please add a text field')
//   }
//   res.status(200).json({message :"Set goals"})
// }



// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = (async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(201).json(goal)
})









// @desc    Update goal
// @route   PUT /api/goals/:id
//const updateGoal = async(req, res) => res.status(200).json({message :`Update goals ${req.params.id} `})
// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = (async (req, res) => {
  // const goal = await Goal.findById(req.params.id)

  // if (!goal) {
  //   res.status(400)
  //   throw new Error('Goal not found')
  // }


  const user= await User.findById(req.user.id)
  // Check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }


  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{ upsert: true, new: true, setDefaultsOnInsert: true })

  res.status(200).json(updatedGoal)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
//const deleteGoal = async(req, res) => res.status(200).json({message :`Delete goals ${req.params.id} `})
// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = (async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const user= await User.findById(req.user.id)
  // Check for user
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  

  await goal.remove()

  res.status(200).json({ id: req.params.id })
})
module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
}





























// const asyncHandler = require('express-async-handler')

// const Goal = require('../models/goalModel')
// const User = require('../models/userModel')

// // @desc    Get goals
// // @route   GET /api/goals
// // @access  Private
// const getGoals = asyncHandler(async (req, res) => {
//   const goals = await Goal.find({ user: req.user.id })

//   res.status(200).json(goals)
// })

// // @desc    Set goal
// // @route   POST /api/goals
// // @access  Private
// const setGoal = asyncHandler(async (req, res) => {
//   if (!req.body.text) {
//     res.status(400)
//     throw new Error('Please add a text field')
//   }

//   const goal = await Goal.create({
//     text: req.body.text,
//     user: req.user.id,
//   })

//   res.status(200).json(goal)
// })

// // @desc    Update goal
// // @route   PUT /api/goals/:id
// // @access  Private
// const updateGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   })

//   res.status(200).json(updatedGoal)
// })

// // @desc    Delete goal
// // @route   DELETE /api/goals/:id
// // @access  Private
// const deleteGoal = asyncHandler(async (req, res) => {
//   const goal = await Goal.findById(req.params.id)

//   if (!goal) {
//     res.status(400)
//     throw new Error('Goal not found')
//   }

//   // Check for user
//   if (!req.user) {
//     res.status(401)
//     throw new Error('User not found')
//   }

//   // Make sure the logged in user matches the goal user
//   if (goal.user.toString() !== req.user.id) {
//     res.status(401)
//     throw new Error('User not authorized')
//   }

//   await goal.remove()

//   res.status(200).json({ id: req.params.id })
// })

// module.exports = {
//   getGoals,
//   setGoal,
//   updateGoal,
//   deleteGoal,
// }
