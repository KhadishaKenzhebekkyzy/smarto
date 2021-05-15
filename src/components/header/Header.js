import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import './Header.css';
import { ReactComponent as Logo } from "../../static/logo.svg";


class Header extends React.Component{
    render(){
        return(
                <Navbar bg="#FFF1E6" expand="lg" sticky="top" className="Header">
                    <Container className="header-container">
                        <Navbar.Brand href="/">
                            <Logo></Logo>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="main-link" href="/">Main</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        );
    }
}

export default (Header);
