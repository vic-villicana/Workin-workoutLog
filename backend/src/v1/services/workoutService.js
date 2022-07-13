const workys = require('../database/workouts')

const getAllWorkouts =  () => {
    const getit = workys.getWorkouts()

    return getit
}

const getOneWorkout = (req) => {
    try{
        const getOne = workys.getOneWorkout(req)
    
        return getOne
    }catch(err){
        throw err
    }
}

const createOneWorkout = (req) => {

    try{
        const postIt = workys.createOneWorkout(req)
        return postIt
    }catch(err){
        //throw errors at the service layer to handle at the controller layer
       throw err
    }
 
}

const deleteOneWorkout = (req) => {
    try{
        workys.deleteOneWorkout(req)
    }catch(err){
        throw err
    }
    
}

const getWorkoutLog = (req) => {
    try{
        const result = workys.getWorkoutLog(req)
        return result
    }catch(err){
        throw err
    }
 
}

const createWorkoutLog = (req) => {
    try{
        const result = workys.createWorkoutLog(req)
        return result
    }catch(err){
        throw err
    }
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    deleteOneWorkout,
    createOneWorkout,
    getWorkoutLog,
    createWorkoutLog
}