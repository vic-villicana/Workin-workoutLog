import {useState} from 'react'
import Dropdown from './Dropdown'

const Exercises = (props) => {

  console.log(props)
        const allExercises = props.exercises.map(exe => {
            return(
                <div className="exercise-box" key={exe.id}>
                    <button className="add-btn add-exe" onClick={() => props.addExercise({id:exe.id, name:exe.name, description:exe.description, group:exe.mgroup})}>
                       <i className="plus circle icon"></i>
                    </button>
                    <div className="exercise-text-box">
                        <h3>{exe.name}</h3>
                        <p>Muscle Group: <span className="bold cap">{exe.mgroup}</span></p>
                        <p>{exe.description}</p>
                    </div>
                </div>

            )
        }) 
       
    

        return(
            <div className='all-exercises'>
                <Dropdown groupSetter={props.groupSetter} />
                <h2>all exercices</h2>
                <div className='exercise-list'>
                    {allExercises}
                </div>
            </div>
        )
  
}

export default Exercises