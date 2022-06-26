import React from 'react'
import Display from './components/Display'
import Bbar from './components/ButtonBar'
import WorkoutList from './components/WorkoutList'

class MyWorkouts extends React.Component{
    constructor(props){
        super(props)
        this.state = {routines:[]}
        // this.fetchRoutines = this.fetchRoutines.bind(this)
        
    }
    
    render(){
        return(
            <div className="myworkout">
                <Display />
                <Bbar  />
                <WorkoutList />

            </div>
        )
    }
}

export default MyWorkouts