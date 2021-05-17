import React from "react";
import NavBar from "../../components/navbar/NavBar";
import './Main.css';


class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                    <NavBar></NavBar>
            </div>
        );
    }
}

export default (Main);