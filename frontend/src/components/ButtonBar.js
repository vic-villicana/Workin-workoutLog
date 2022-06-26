import React from "react";

class Bbar extends React.Component{
    

    render() {
        return(
            <div className="bar" href={this.props.href}>
                <h3>{this.props.name}</h3>
                <div>
                    {this.props.btn}
                </div>
            </div>
        )
    }
}
export default Bbar