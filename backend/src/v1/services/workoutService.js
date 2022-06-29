const workys = require('../database/workouts')

const getAllWorkouts =  () => {
    const getit = workys.getWorkouts()

    return getit
}

const getOneWorkout = (req) => {
    const getOne = workys.getOneWorkout(req)
    
    return getOne
}

const createOneWorkout = (req) => {
    const postIt = workys.createOneWorkout(req)
    return postIt
}

const deleteOneWorkout = (req) => {
    workys.deleteOneWorkout(req)
}

const getWorkoutLog = (req) => {
    const result = workys.getWorkoutLog(req)
    return result
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    getWorkoutLog,
    deleteOneWorkout,
    createOneWorkout
}