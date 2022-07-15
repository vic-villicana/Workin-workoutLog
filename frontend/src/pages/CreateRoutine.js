import {useState} from 'react'
import RoutineList from '../components/RoutineList'
import RoutineForm from '../components/RoutineForm'

import workoutFinder from '../api/workoutFinder'

const CreateRoutine = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [routineId, setRoutineId] = useState()
    const [listOpen, setListOpen] = useState(false)

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
        setRoutineId(response.data.result.id)
        setName(response.data.result.name)
        setDescription(response.data.result.description)
        setListOpen(true)
       
        }catch(err){
            console.log(err)
        }
    }


    return(
        <div className="routinepage-container">
            
            {listOpen ? <RoutineList name={name} description={description} routineId={routineId}/> : <RoutineForm submitRoutine={submitRoutine} />}
          
        </div>
    )
}
export default CreateRoutine