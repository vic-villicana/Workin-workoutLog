import {useState, useEffect} from 'react'
import RoutineList from '../components/RoutineList'
import RoutineForm from '../components/RoutineForm'

import workoutFinder from '../api/workoutFinder'

const CreateRoutine = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [routineId, setRoutineId] = useState()
    const [listOpen, setListOpen] = useState(false)
    const [exercises, setExercises] = useState()
    const [group, setGroup] = useState()

    useEffect(() => {
        const request = () => {
            try{
                // const response = await workoutFinder.get('/v1/exercises')
                getAllExercises()
                // setExercises(response.result.rows)
            }catch(err){
                console.log(err)
            }            
        }
        request()
    }, [])
    
    useEffect(() => {
       
        const request = async() => {
            try{
                const mgroup = await workoutFinder.get(`/v1/exercises/${group}`)
                setExercises(mgroup.results.rows)
            }catch(err){
                console.log(err)
            }            
        }
        if(group){
            request()
        }
        
    }, [group])

    // const OpenList = () => {
    //    setListOpen(true)
    // }

    // const getRoutineId = (id) => {
    //     setRoutineId(id)
    // }

    const submitRoutine = async (e, name, description) => {
        e.preventDefault()
        try{
         const response = await workoutFinder.post('/v1/myworkouts',{
            name:name,
            description:description
        })        
        console.log(response.data)
        setRoutineId(response.data.results.id)
        setName(response.data.results.name)
        setDescription(response.data.results.description)
        setListOpen(true)
       
        }catch(err){
            console.log(err)
        }
    }

    const groupSetter = (group) => {
        setGroup(group)
    }
    

    const getAllExercises = async () => {
    
            try{
                const response = await workoutFinder.get(`/v1/exercises`)
                console.log(response.data.results)
                setExercises(response.data.results)
            }catch(err){
                console.log(err)
            }
    }
    console.log(exercises)
    return(
        <div className="routinepage-container">
            
            {listOpen ? <RoutineList groupSetter={groupSetter} exercises={exercises} name={name} description={description} routineId={routineId}/> : <RoutineForm submitRoutine={submitRoutine} />}
          
        </div>
    )
}
export default CreateRoutine