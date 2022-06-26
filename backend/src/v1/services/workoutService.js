const workys = require('../database/getworkouts')

const getAllWorkouts =  () => {
    const getit = workys.getWorkouts()

    return getit
}

module.exports = {
    getAllWorkouts
}