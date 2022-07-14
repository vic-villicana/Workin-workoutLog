import {useState} from 'react'

const CreateRoutine = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    return(
        <>
            <section className="create-routine">
                <div className="form-container routine">
                    <h1>New Routine</h1>
                    <form>
                        <div className="formFields">
                            <label htmlFor="name"></label>
                            <input id="name" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                            <label htmlFor="description"></label>
                            <input id="desription" placeholder="Description" type="text"value={description} onChange={(e) => setDescription(e.target.value)} />
                            
                        </div>                    
                        <input type="submit" className="routine-submit" />
                    </form>
                </div>
            </section>
        </>
    )
}
export default CreateRoutine