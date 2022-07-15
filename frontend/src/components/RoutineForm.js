import {useState} from 'react'
import workoutFinder from '../api/workoutFinder'

const CreateRoutine = (props) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const submitRoutine = async (e) => {
        e.preventDefault()
        try{
         const response = await workoutFinder.post('/v1/myworkouts',{
            name:name,
            description:description
        })        
        props.getRoutineId(response.data.result.id)
        props.OpenList()
       
        }catch(err){
            console.log(err)
        }
    }

    
    
    return(
        <>
            <section className="create-routine">
                <div className="form-container routine">
                    <h1>New Routine</h1>
                    <form onSubmit={(e) => submitRoutine(e)}>
                        <div className="formFields">
                            <label htmlFor="name"></label>
                            <input id="name" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="description"></label>
                            <input id="desription" placeholder="Description" type="text"value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>                    
                        <input value="submit"type="submit" className="routine-submit" placeholder='set' />
                    </form>
                </div>
            </section>
        </>
    )
}
export default CreateRoutine