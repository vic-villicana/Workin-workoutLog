import {useState, useRef} from 'react'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import Exercises from './Exercises'

const RoutineList = (props) => {
 
    const nodeRef = useRef(null)
    const renderList = props.playlist.map((exe, i) => {
        return(                
                    <div className="exercise-box" key={exe.id} ref={nodeRef}>
                        <button className="add-btn min-exe" onClick={() => console.log({id:exe.id, name:exe.name, description:exe.description, group:exe.mgroup})}>
                            <i className="minus circle icon"></i>
                        </button>
                        <div className="exercise-text-box">
                            <h3>{exe.name}</h3>
                            <p>Group:<span className="bold">{exe.group}</span></p>
                            <p>{exe.description}</p>
                        </div>
                    </div>
        )
    })

   
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
                        {renderList}        
                </div>
                <button className="btn">Set</button>
            </div>
            <Exercises exercises={props.exercises} setterFunc={props.groupSetter} addExercise={props.addExercise}/>
        </>

    )
}

export default RoutineList