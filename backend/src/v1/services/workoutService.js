const workys = require('../database/workouts')

const getAllWorkouts =  () => {
    const getit = workys.getWorkouts()

    return getit
}

module.exports = {
    getAllWorkouts
}