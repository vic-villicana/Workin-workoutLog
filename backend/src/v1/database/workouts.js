const db = require("../../../db")

const getWorkouts = async () => {
    const response = await db.query('SELECT * FROM routines')

    return response
}

const getOneWorkout = async (req) => {
    const response = await db.query('SELECT myexercises.id as theid, exercises.name, exercises.description, exercises.id, mgroup FROM myexercises JOIN exercises ON exercises.id = myexercises.exercise_id JOIN routines ON routines.id = myexercises.routine_id WHERE myexercises.routine_id = $1', 
    [req.params.id])
    return response
}

const getWorkoutLog = async (req) => {
    const response = db.query('SELECT * FROM myworkoutlog WHERE myexercises_id = $1', [req.params.id])
    return response
}

module.exports = {
    getWorkouts,
    getOneWorkout,
    getWorkoutLog
}