import React from "react"
import {Navbar, Nav, Container} from 'react-bootstrap';
import MyProfil from "../../pages/profil/MyProfil";
import "./NavBar.css"

class NavBar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <Nav className="justify-content-center" defaultActiveKey="/my-profil">
                    <Nav.Item>
                    <Nav.Link className="link" href="/my-profil">My profil</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link className="link" href="/my-loan">My loan</Nav.Link>
                    </Nav.Item>
                </Nav>
                <MyProfil></MyProfil>
            </div>
        )
    }
}


export default (NavBar);