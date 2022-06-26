import React from 'react'
import ListItem from './ListItem'
import workoutFinder from '../api/workoutFinder'

class AListItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {set:{weight:0, reps:0, exercise_id:this.props.theId},log:{}} 
        this.renderSform = this.renderSform.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
        this.postRep= this.postRep.bind(this)
    }

    componentDidMount(){
        const getLogs = async () => {
            try{
                const response = await workoutFinder(`/workoutlogs/${this.props.theId}`)
                this.setState({log:response.data.results.rows})
            }catch(e){
                console.log(e)
            }
        }    
        getLogs()    
    }

    onInputChange(evt) {
        const set = Object.assign({}, this.state.set)
        set[evt.target.name] = evt.target.value
        this.setState({set})
    }
    postRep(event) {
        event.preventDefault()
        try{
            this.props.submitRep({
                id:this.state.set.exercise_id,
                reps:this.state.set.reps,
                weight:this.state.set.weight
            })
        }catch(e){
            console.log(e)
        }
        
    }

    renderSform() {
        
        if(this.props.isExeOpen === this.props.keyed){
            return (
                <div className="alist-item" key={this.props.keyed}>
                    <form className="workout-form"  onSubmit={this.postRep} >
                    <p>1</p>
                        <input type="hidden" readOnly pattern="[0-9]*" value={this.state.exercise_id} />
                        <input type="text" pattern="[0-9]*" name="reps" placeholder="reps" value={this.state.reps} onChange={this.onInputChange}/>
                        <input type="text" pattern="[0-9]*" name="weight" placeholder="weight" value={this.state.weight} onChange={this.onInputChange}/><p>lbs</p>
                        <input type="submit" />
                    </form>
                </div>                   
            )
        }
        
    }

    render(){
        
            return(
                <div>
                    <ListItem 
                     keyes={this.props.keyed}
                     name={this.props.name}
                     group={this.props.group} 
                     img={this.props.img} 
                     setExe={this.props.setExe}
                     imgSz={this.props.imgSz}
                     description={this.props.description}
                    />
                    {this.renderSform()}
                </div>
            )
       
    }
}

export default AListItem