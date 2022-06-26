const workys = require('../database/workouts')

const getAllWorkouts =  () => {
    const getit = workys.getWorkouts()

    return getit
}

const getOneWorkout = (req) => {
    const getOne = workys.getOneWorkout(req)
    
    return getOne
}

module.exports = {
    getAllWorkouts,
    getOneWorkout
}