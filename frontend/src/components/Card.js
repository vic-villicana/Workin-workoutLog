import React from "react";
import {Link} from "react-router-dom"

class Card extends React.Component{
    

    render() {
        return(
            <Link to={this.props.href}>
                <button className="card" >
                    <img src={this.props.img} alt={this.props.name}/>
                    {this.props.name}
                </button>
            </Link>
            
        )
    }
}
export default Card