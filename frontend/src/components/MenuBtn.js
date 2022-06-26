import React from "react";

class MenuBtn extends React.Component{
    

    render() {
        return(
            <button className="btn" href={this.props.href} onClick={this.props.closeRoutine} >
                {this.props.name}
            </button>
        )
    }
}
export default MenuBtn