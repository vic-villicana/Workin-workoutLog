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

const getOneWorkout = async (req, res) => {
    const getOne = await workoutService.getOneWorkout(req)

    res.status(201).json({
        status:"success",
        results:getOne.rows
    })
}

const createOneWorkout = async(req, res) => {
    const response = workoutService.createOneWorkout(req)
    res.status(201).json({
        status:'create successful',
        result:response
    })
}   

const updatedAWorkout = (req, res) => {
    res.send('updated a workout')
}

const deleteOneWorkout = async (req, res) => {
    const response = await workoutService.deleteOneWorkout(req)
    res.status(200).json({
        status:'success',
        results:response
    })
    
}

const getWorkoutLog = async (req, res) => {
    const getLog = await workoutService.getWorkoutLog(req)
    
    res.status(201).json({
        status:'Success',
        results:getLog.rows
    })
}



module.exports = {
    getMyWorkouts,
    getOneWorkout,
    createOneWorkout,
    updatedAWorkout,
    deleteOneWorkout,
    getWorkoutLog
}