import React from "react";
import { Col, Row, Container, Card, Modal, Alert } from "react-bootstrap";
import {Link} from "react-router-dom";
import './MyProfil.css';
import Close from "../../static/close.svg";
import Id from "../../components/profil/Id";
import Empty from "../../static/empty.svg";
import Id2 from "../../static/id-2.svg";
import "../../components/profil/Circle.css";
 
class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            fileName: '',
            uploaded: false,
            saved: false,
            dropped: 0,
            fileSize: 0,
            valid: false,
            percentage: 50
        };
        this.fileAccept = this.fileAccept.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.saveId = this.saveId.bind(this);
        this.percentageCalculation = this.percentageCalculation.bind(this);
    }

    percentageCalculation(){
        if(this.state.uploaded === true){
            this.setState({percentage: 100});
        }
    }

    async fileAccept (data) {
        console.log(data[0]);
        this.setState({fileName: data[0].name}, () =>
        console.log(this.state.fileName));
        this.setState({uploaded: true});
        this.setState({fileSize: data[0].size});
        this.setState({dropped: this.state.dropped+1});
        this.uploadedFile();
        this.checkValidity();
    }

    checkValidity (){
        if(this.state.fileName.includes("png") || this.state.fileName.includes("jpeg") || this.state.fileName.includes("jpg") || this.state.fileName.includes("pdf")){
            this.setState({valid: true});
        } else{
            this.setState({valid: false});
        }
    }

    uploadedFile () {
        console.log(this.state);
        this.setState({uploaded: true});
    }

    handleOpen = () => {
        this.setState({show: true});
    }

    handleClose = () => {
        this.setState({show: false});
        this.percentageCalculation();
    }

    saveId() {
        if(this.state.uploaded === true){
            this.setState({saved: true});
        }
        this.setState({show: false});
        this.percentageCalculation();
    }

    render(){
        return(
            <div className="MyProfil">
                <Container>
                    <h1>Hello Paul</h1>
                    <Card className="card-1">
                        <Row>
                            <Col md={1} xs={2} className="center-vertical-3">
                                {/* <Circle status={this.state.uploaded}/> */}
                                <div className="flex-wrapper">
                                <div className="single-chart" onChange={this.percentageCalculation}>
                                    <svg viewBox="0 0 36 36" className="circular-chart green">
                                    <path className="circle-bg"
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <path className="circle"
                                        strokeDasharray={this.state.percentage}
                                        d="M18 2.0845
                                        a 15.9155 15.9155 0 0 1 0 31.831
                                        a 15.9155 15.9155 0 0 1 0 -31.831"
                                    />
                                    <text x="19" y="22" className="percentage">{this.state.percentage}%</text>
                                    </svg>
                                </div>
                            </div>
                            </Col>
                            <Col md={11} xs={10} className="center-vertical-1">
                                <p>Upload your ID to finish your registration</p>
                            </Col>
                        </Row>
                    </Card>
                    <h2>Mes justificatifs</h2>
                    <Card className="card-2" onClick={() => this.handleOpen()}>
                        <Row>
                            <Col md={1} xs={2} className="center-vertical-1">
                                <img src={Empty} alt="empty"></img>
                            </Col>
                            <Col md={11} xs={10} className="center-vertical-2">
                                <p>My ID</p>
                            </Col>
                        </Row>
                    </Card>
                    {
                        this.state.uploaded ?
                        // this.state.valid ?
                        <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.show}
                        onHide={this.handleClose}>
                        <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            My ID
                        </Modal.Title>
                            <img onClick={this.handleClose} src={Close} alt="close"/>
                        </Modal.Header>
                        <Modal.Body>
                            <Id sendFile={this.fileAccept} uploadStatus={this.state.uploaded}/>
                            <p className="fileName">{this.state.fileName}</p>
                            <Card className="card-3">
                                <Row>
                                <Col md={1} xs={2} className="center-vertical-4">
                                    <img src={Id2} alt="id-2"></img>
                                </Col>
                                <Col md={11} xs={10} className="center-vertical-4">
                                    <p>Your ID has been uploaded. <br/> We will verify it in the next 24h.</p>
                                </Col>
                                </Row>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn-2" onClick={this.saveId}>Save</button>
                        </Modal.Footer>
                    </Modal>
                    :
                    // <Modal
                    //     size="lg"
                    //     aria-labelledby="contained-modal-title-vcenter"
                    //     centered
                    //     show={this.state.show}
                    //     onHide={this.handleClose}>
                    //     <Modal.Header>
                    //     <Modal.Title id="contained-modal-title-vcenter">
                    //         My ID
                    //     </Modal.Title>
                    //         <img onClick={this.handleClose} src={Close} alt="close"/>
                    //     </Modal.Header>
                    //     <Modal.Body>
                    //         <Id sendFile={this.fileAccept} uploadStatus={this.state.uploaded}/>
                    //         <Alert variant="danger" dismissible>
                    //             <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    //             <p>
                    //             The format or size of the uploded file is not accepted. 
                    //             </p>
                    //         </Alert>
                    //     </Modal.Body>
                    //     <Modal.Footer>
                    //     <button className="btn-2" onClick={this.handleClose}>Save</button>
                    //     </Modal.Footer>
                    // </Modal>
                    // :
                        <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state.show}
                        onHide={this.handleClose}>
                        <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            My ID
                        </Modal.Title>
                            <img onClick={this.handleClose} src={Close} alt="close"/>
                        </Modal.Header>
                        <Modal.Body>
                            <Id sendFile={this.fileAccept} uploadStatus={this.state.uploaded}/>
                        </Modal.Body>
                        <Modal.Footer>
                        <button className="btn-2" onClick={this.handleClose}>Save</button>
                        </Modal.Footer>
                    </Modal>
                    }
                <div className="center">
                    <Link to="#"><button className="btn-1">Next</button></Link>
                </div>
                </Container>
            </div>
        );
    }
}

export default (Main);