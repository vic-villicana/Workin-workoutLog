import {useState} from 'react'
import Dropdown from './Dropdown'

const Exercises = (props) => {

    console.log(props)
        const allExercises = props.exercises.map(exe => {
            return(
                <div className="exercise-box">
                    <button className="add-btn" onClick={() => props.setExe(props.keyes)}>
                       <i className="plus circle icon"></i>
                    </button>
                    <div className="exercise-text-box">
                        <h4 >{exe.name}</h4>
                        <p>Muscle Group: <span className="bold">{exe.mgroup}</span></p>
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