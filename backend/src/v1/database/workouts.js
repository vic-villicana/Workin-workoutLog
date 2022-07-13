const db = require("../../../db")

const getWorkouts = () => {
    
        const response = db.query('SELECT * FROM routines')
        return response
  
    
}

const getOneWorkout = async (req) => {
    try{
        const response = await db.query('SELECT myexercises.id as theid, exercises.name, exercises.description, exercises.id, mgroup FROM myexercises JOIN exercises ON exercises.id = myexercises.exercise_id JOIN routines ON routines.id = myexercises.routine_id WHERE myexercises.routine_id = $1', 
        [req.params.id])
        
        if(response.rowCount === 0){
            throw new Error()
        }else{
            return response
        }
        
    }catch(err){
       throw {status:404, message:'no row with that id exists'}
    }

        
}

const createOneWorkout = (req) => {
    try{
        const response = db.query("INSERT INTO routines (name, description) VALUES ($1, $2)", [req.body.name, req.body.description])
        return response
    }catch(err){
        throw {status: 500, message: err?.message || err}
    }
  
}

const deleteOneWorkout = async (req) => {
    try{
        await db.query('DELETE FROM routines WHERE id = $1', [req.params.id])
        
    }catch(err){
        throw {status: 500, message: err?.message || err}
    }
    
}

const getWorkoutLog = async (req) => {
    try{
        const response = await db.query('SELECT * FROM myworkoutlog WHERE myexercises_id = $1', [req.params.id])
            
        return response 
    }catch(err){
        throw err
    }

}

const createWorkoutLog = async (req) => {
    try{
        const {reps, weight, id} = req.body
        const response = await db.query('INSERT INTO myworkoutlog (reps, weight, myexercises_id) VALUES ($1, $2, $3)', [reps, weight, id])
        return response
    }catch(err){
        throw {status:500, message: err?.message || err}
    }
}



module.exports = {
    getWorkouts,
    getOneWorkout,
    createOneWorkout,
    deleteOneWorkout,
    getWorkoutLog,
    createWorkoutLog
}