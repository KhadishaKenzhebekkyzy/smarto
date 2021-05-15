import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import NavBar from "../../components/navbar/NavBar";
import './Main.css';


class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                <Container className="main-container">
                    <NavBar></NavBar>
                </Container>
            </div>
        );
    }
}

export default (Main);