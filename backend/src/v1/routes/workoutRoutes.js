const { application } = require('express')
const express = require('express')
const router = express.Router()
const workoutController = require('../controllers/workoutController')

router.get('/myworkouts', workoutController.getMyWorkouts)

router.get('/myworkouts/:id', workoutController.getOneWorkout)

router.post('/myworkouts', workoutController.createOneWorkout)

router.patch('/myworkouts/:id', workoutController.updatedAWorkout)

router.delete('/myworkouts/:id', workoutController.deleteOneWorkout)

router.get('/workoutlogs/:id', workoutController.getWorkoutLog)

module.exports = router;