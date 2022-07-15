import {useState} from 'react'
import RoutineList from '../components/RoutineList'
import RoutineForm from '../components/RoutineForm'

import workoutFinder from '../api/workoutFinder'

const CreateRoutine = () => {
    // const [name, setName] = useState("")
    // const [description, setDescription] = useState("")
    const [routineId, setRoutineId] = useState()
    const [listOpen, setListOpen] = useState(false)

    const OpenList = () => {
       setListOpen(true)
    }

    const getRoutineId = (id) => {
        setRoutineId(id)
    }

    return(
        <>
            
            {listOpen ? <RoutineList routineId={routineId}/> : <RoutineForm OpenList={OpenList} getRoutineId={getRoutineId}/>}
          
        </>
    )
}
export default CreateRoutine