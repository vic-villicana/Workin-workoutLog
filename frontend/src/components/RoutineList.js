import {useState} from 'react'
import AllExercises from '../AllExercises'

const RoutineList = (props) => {
  
    return(
        <>
            <div className="playlist-container">
                <div className="routine-header">
                    <h2>Routine {props.routineId}</h2>
                    <p>Full body split with focus on 
                        lifiting heavy the first two 
                        sets of each exercise.
                    </p>
                </div>
                <div className="routine-playlist">

                </div>
                <button className="btn">Set</button>
            </div>
            <AllExercises />
        </>

    )
}

export default RoutineList