const getMyWorkouts = (req, res) => {
    res.send('we got the workouts')
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