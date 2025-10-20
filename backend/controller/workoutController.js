const Workout = require('../models/workoutModel')

// get workout
const getWorkouts = async (req, res) => {
    try{
        const getworkout = await Workout.find({}).sort({createdAt: -1})
        res.status(200).json(getworkout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// get single workout
const getWorkout = async (req, res) => {
    const {id} = req.params
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({Error: 'Data Not Found'})
    }

    res.status(200).json(workout)
}

// create workout
const createWorkout = async (req, res) => {
    const {title, loads, rep} = req.body
    try{
        const workout = await Workout.create({title, loads, rep})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

// update workout
const updateWorkout = async (req, res) => {
    const {id} = req.params
    const updatedworkout = await Workout.findByIdAndUpdate(id, req.body, {new: true})

    if(!updatedworkout){
         return res.status(404).json({Error: 'Data Not Found'})
    }

    res.status(200).json(updatedworkout)
}

// delete workout
const deleteWorkout = async (req, res) => {
    const {id} = req.params
    const deleteworkout = await Workout.findByIdAndDelete(id)

    if(!deleteworkout){
         return res.status(404).json({Error: 'Data Not Found'})
    }

    res.status(200).send('Deleted Data')
}

// export controller
module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}