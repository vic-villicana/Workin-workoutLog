const workouts = require('../database/workouts')

const getAllWorkouts =  () => {
    const getit = workouts.getWorkouts()

    return getit
}

const getOneWorkout = (req) => {
    try{
        const getOne = workouts.getOneWorkout(req)
    
        return getOne
    }catch(err){
        throw err
    }
}

const createOneWorkout = (req) => {

    try{
        const postIt = workouts.createOneWorkout(req)
        return postIt
    }catch(err){
        //throw errors at the service layer to handle at the controller layer
       throw err
    }
 
}

const deleteOneWorkout = (req) => {
    try{
        workouts.deleteOneWorkout(req)
    }catch(err){
        throw err
    }
    
}

const getWorkoutLog = (req) => {
    try{
        const result = workouts.getWorkoutLog(req)
        return result
    }catch(err){
        throw err
    }
 
}

const createWorkoutLog = (req) => {
    try{
        const result = workouts.createWorkoutLog(req)
        return result
    }catch(err){
        throw err
    }
}

const getExercises = () => {
    try{
        const result = workouts.getExercises()
      
        return result
    }catch(err) {
        console.log(err)
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    deleteOneWorkout,
    createOneWorkout,
    getWorkoutLog,
    createWorkoutLog,
    getExercises
}