require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRouter = require('./routes/workout')

const app = express()

// parse json
app.use(express.json())

// middle war and logs
app.use((req, res, next) => {
    console.log(req.method, req.path)
    next()
})

// route
app.use('/api/workouts/', workoutRouter)


mongoose.connect(process.env.MONGO_URI)
    .then(() => {     

    // app running and listening
    app.listen(process.env.PORT, () => {
    console.log('Listening to the port', process.env.PORT)
    })

    })

    .catch((error) => {
        console.log('Error in connecting')
    })


