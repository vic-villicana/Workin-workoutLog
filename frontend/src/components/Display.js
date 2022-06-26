import React from "react";
import weight from '../imgs/clean.jpg'
class Display extends React.Component{
    contructor(){

    }

    render() {
        return(
            <div className="display" style={{backgroundImage:`linear-gradient(rgb(65, 65, 65, 0.0), rgb(45, 45, 45, 0.568)), url(${weight})`}}>
                Display
            </div>
        )
    }
}
export default Display
