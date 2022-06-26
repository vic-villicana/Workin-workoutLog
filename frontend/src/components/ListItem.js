import React from "react";
import weight from '../imgs/clean.jpg'

const ListItem = (props) => {
    

    
   
        return(
            <div className="list-item">
                <img src={props.img} className={`list-img ${props.imgSz}`} alt="clean" />
                <div className="list-text">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                <div className="icon-group">
                    <button className="add-btn" onClick={() => props.setExe(props.keyes)}>
                        <i className="plus circle icon"></i>
                    </button>
                    <button className="op-btn" onClick={() => props.listOut(props.keyed)}>
                        <i className="ellipsis horizontal icon"></i>
                    </button>
                </div>
            </div>        
            
        )
    
}
export default ListItem