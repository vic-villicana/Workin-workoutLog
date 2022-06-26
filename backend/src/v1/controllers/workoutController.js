const workoutService = require('../services/workoutService')

const getMyWorkouts = async (req, res) => {
    const gotIt = await workoutService.getAllWorkouts()
    console.log(gotIt)
    // res.send({status:'fantastic0', data: gotIt})
    res.status(200).json({
        status:"success",
        results:gotIt.rows
    })
}

const getOneWorkout = (req, res) => {
    res.send('got one woorkout routine')
}

const createOneWorkout = (req, res) => {
    res.send('created a workout')
}

const updatedAWorkout = (req, res) => {
    res.send('updated a workout')
}

const deleteAWorkout = (req, res) => {
    res.send('delete a workout')
}
const getWorkoutLog = (req, res) => {
    res.send('got it')
}



module.exports = {
    getMyWorkouts,
    getOneWorkout,
    createOneWorkout,
    updatedAWorkout,
    deleteAWorkout,
    getWorkoutLog
}