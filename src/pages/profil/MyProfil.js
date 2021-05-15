import React from "react";
import { Col, Row, Container, Card, Modal, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './MyProfil.css';
import Circle from "../../components/profil/Circle";
import Close from "../../static/close.svg";

function MyModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            My ID
          </Modal.Title>
            <img onClick={props.onHide} src={Close} alt="close"/>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-2" onClick={props.onHide}>Save</button>
        </Modal.Footer>
      </Modal>
    );
  }

class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleOpen = () => {
        this.setState({show: true});
    }

    handleClose = () => {
        this.setState({show: false});
    }

    render(){
        return(
            <div className="MyProfil">
                    <h1>Hello Paul</h1>
                    <Card className="card-1">
                        <Row>
                            <Col md={1} xs={2}>
                                <Circle/>
                            </Col>
                            <Col md={11} xs={10}>
                                <p>Upload your ID to finish your registration</p>
                            </Col>
                        </Row>
                    </Card>
                    <h2>Mes justificatifs</h2>
                    <Card className="card-2" onClick={() => this.handleOpen()}>
                        <Row>
                            <Col md={1} xs={2}>

                            </Col>
                            <Col md={11} xs={10}>
                                <p>My ID</p>
                            </Col>
                        </Row>
                    </Card>
                    <MyModal
                        show={this.state.show}
                        onHide={this.handleClose}
                    />
                <div className="center">
                    <Link to="#"><button className="btn-1">Next</button></Link>
                </div>
            </div>
        );
    }
}

export default (Main);