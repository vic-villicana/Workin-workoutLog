import {useState} from 'react'
import AllExercises from './Exercises'

const RoutineList = (props) => {
 
    return(
        <>
            <div className="playlist-container">
                <div className="routine-header">
                    <h2>{props.name}</h2>
                    <p>
                        {props.description}
                    </p>
                </div>
                <div className="routine-playlist">
                    
                </div>
                <button className="btn">Set</button>
            </div>
            <AllExercises exercises={props.exercises} setterFunc={props.groupSetter} />
        </>

    )
}

export default RoutineList