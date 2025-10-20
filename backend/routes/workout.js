const express = require('express')
const Workout = require('../models/workoutModel')
const router = express.Router()

const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controller/workoutController')

router.get('/', getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.patch('/:id', updateWorkout)

router.delete('/:id', deleteWorkout)

module.exports = router