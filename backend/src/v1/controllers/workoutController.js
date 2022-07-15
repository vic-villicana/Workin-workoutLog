const workoutService = require('../services/workoutService')

const getMyWorkouts = async (req, res) => {
    const gotIt = await workoutService.getAllWorkouts()
  
    // res.send({status:'fantastic0', data: gotIt})
    res.status(200).json({
        status:"success",
        results:gotIt.rows
    })
}

const getOneWorkout = async (req, res) => {
    const {
        params: {id}
    } = req

    if(!id){
        res.status(400).json({
            status: "Failed",
            data: {error: "Parameter: 'id' can not be empty"}
        })
    }else{
        try {
            const getOne = await workoutService.getOneWorkout(req)
            res.status(200).json({
            status:"success",
            results:getOne.rows
        })}catch(err){
            
            res.status(err?.status || 500).json({
                status:"Failed",
                data:{
                    error: err?.message || err
                }
            })
        }
    }


}

const createOneWorkout = async(req, res) => {
  
    if(!req.body.name || !req.body.description){
        res.status(400).json({
            status:'Failed',
            data: {
                Error:"One of the following keys is missing : 'name', 'description'"
            }
        })
    }else{
        try{
            const response = await workoutService.createOneWorkout(req)
            res.status(201).json({
                status:'create successful',
                result:response.rows[0]
            })
        }catch(err){
            res.status(500).json({
                status:"Failed",
                data:{
                    error:(err.message || "Server took too long to respond")
                }
            })
        }
    }
    
}   

const updatedAWorkout = (req, res) => {
    res.send('updated a workout')
}

const deleteOneWorkout = async (req, res) => {
    try{
        const response = await workoutService.deleteOneWorkout(req)
        res.status(204).json({
        status:'ok',
        
        })
    }catch(err){
        res.status(err?.status || 500).json({
            status:"failed",
            data:{error:err?.message || err}
        })
    }
    
}

const getWorkoutLog = async (req, res) => {
    try{
        const getLog = await workoutService.getWorkoutLog(req)
    
        res.status(201).json({
            status:'Success',
            results:getLog.rows
        })
    }catch(err) {
        res.status(err?.status || 500).json({
            status:'Failed',
            data:{error: err?.message || err}
        })
    }
    
}

const createWorkoutLog = async(req, res) => {
    const {weight, reps, id} = req.body

    if(!reps || !id){
        res.status(400).json({
            status:"Failed",
            data:{error: "one of the following keys are missing: 'reps', 'id'"}
        })
    }
    try{
        const result = await workoutService.createWorkoutLog(req)
        res.status(201).json({
            status:"success",
            data:result.rows
        })
    }catch(err){
        res.status(err?.status || 500).json({
            status:"Failed",
            data:{error: err?.message || err}
        })
    }
}

module.exports = {
    getMyWorkouts,
    getOneWorkout,
    createOneWorkout,
    updatedAWorkout,
    deleteOneWorkout,
    getWorkoutLog,
    createWorkoutLog
}