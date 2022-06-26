import React from 'react'
import ListItem from './ListItem'

const BItem = (props) => {


    const renderSform = () => {
        
        if(this.props.isExeOpen){
            return (
                <div className="alist-item">
                    
                    <form className="workout-form">
                    <p>1</p>
                        <input type="text" pattern="[0-9]*" placeholder="reps" />
                        <input type="text" pattern="[0-9]*" placeholder="weight" />
                        <input type="submit" />
                    </form>
                </div>                   
            )
        }
        
    }

    return (
            <div>
                <ListItem 
                     keyes={props.keyed}
                     name={props.name}
                     group={props.group} 
                     img={props.img} 
                     openExe={props.openExe}
                />
                {renderSform()}
            </div>
    )
}

export default BItem