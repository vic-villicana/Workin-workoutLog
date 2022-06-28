const workys = require('../database/workouts')

const getAllWorkouts =  () => {
    const getit = workys.getWorkouts()

    return getit
}

const getOneWorkout = (req) => {
    const getOne = workys.getOneWorkout(req)
    
    return getOne
}

const getWorkoutLog = (req) => {
    const result = workys.getWorkoutLog(req)
    return result
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    getWorkoutLog
}