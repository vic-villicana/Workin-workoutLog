import React from "react";
import AListItem from './AListItem'
import ListItem from './ListItem'

import Bbar from './ButtonBar'
import MenuBtn from './MenuBtn' 
import workoutFinder from '../api/workoutFinder'




class WorkoutList extends React.Component{
    constructor(props){
        super(props)
        this.state = {isROpen:false, exeId:null, myexeId:null, routineId:null, routines:[], exercises:[]}
    
        this.renderList = this.renderList.bind(this)
        this.openExe = this.openExe.bind(this)
        this.listOut = this.listOut.bind(this)
        this.renderRoutine = this.renderRoutine.bind(this)
        this.closeRoutine = this.closeRoutine.bind(this)
        this.renderOverList = this.renderOverList.bind(this)
        this.submitSet = this.submitSet.bind(this)
    }

    componentDidMount() {

        const getroutines = async () => {
            try{
                const response = await workoutFinder.get('/myworkouts')
                console.log(response)
                this.setState({routines:response.data.data.routines})
                
            }catch(e){
                console.log(e)
            }
        }
        getroutines()
       
      
     
    }

    async listOut(id){
        const exercises = await workoutFinder.get(`/myworkouts/${id}`)
        console.log(exercises)
        this.setState({isROpen:true, routineId:id, exercises:exercises.data.data.exercises})
    }

    openExe(id){
        console.log(id)
        this.setState({exeId:id})
        
    }

    async submitSet({id, reps, weight}){
        try{
            const response = await workoutFinder.post(`/myworkouts`, {
                id:id,
                reps:reps,
                weight:weight
            })
            console.log(response)
        }catch(e){
        }
        
    }

    renderList(){
        const workoutList = this.state.routines.map((exe => {
            return <ListItem 
                        key={exe.id} 
                        keyed={exe.id} 
                        name={exe.name} 
                        description={exe.description} 
                        img={exe.img} 
                        listOut={this.listOut} 
                        imgSz='lrg'
                    />
         }))        
        
        return (
            <React.Fragment>
                {workoutList}
            </React.Fragment>
        )
       }

    renderRoutine(){

        const lista = this.state.exercises.map((exe) => {
            
            return (
                <AListItem 
                    theId={exe.theid}
                    keyed={exe.id} 
                    name={exe.name} 
                    group={exe.mgroup} 
                    img={exe.img} 
                    setExe={this.openExe} 
                    description={exe.description}
                    isExeOpen={this.state.exeId} 
                    imgSz='mdm' 
                    submitRep={this.submitSet}
                />            
            )
        })
        return (
            <React.Fragment>
                <Bbar href='myworkouts' btn={<MenuBtn name="back" closeRoutine={this.closeRoutine} />} />
                <h2>{this.renderOverList()}</h2>
                {lista}
            </React.Fragment>
        )
    }

    renderOverList(){
        for(let key of this.state.routines){
            if(key.id === this.state.routineId){
                return key.name
            }
        }
    }

    closeRoutine(){
        this.setState({isROpen:false})
    }

    render() {
        // console.log(this.props.routines[0].name)
        if(this.state.isROpen){
            return(
                <div className="workout-list">
                    
                    {this.renderRoutine()}        
                </div>
            )
        }else{
            return(
                <div className="workout-list">
                    <h2>Workout Routines</h2>
                    {this.renderList()}        
                </div>        
                
            )
        }
    }
}
export default WorkoutList