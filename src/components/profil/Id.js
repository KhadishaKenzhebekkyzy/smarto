import React from "react";
import "./Id.css";
import {Row, Col} from "react-bootstrap";
import id from "../../static/id.png";

class IdUpload extends React.Component{
    constructor(props){
        super(props);
        this.dragHandler = this.dragHandler.bind(this);
        this.dropHandler = this.dropHandler.bind(this);
        this.fileHandler = this.fileHandler.bind(this);
        this.state={
            file: [],
            drag: false,
            drop: false,
            uploaded: this.props.uploadStatus
        }
    }

    dragHandler(e){
        e.preventDefault();
        this.setState({drag: true});
        this.setState({drop: false});
    }

    dropHandler(e){
        e.preventDefault();
        this.setState({drag: false});
        this.setState({drop: false});
    }

    fileHandler(e){
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        console.log(files);
        this.setState({drag: false});
        this.setState({drop: true});
        this.setState({file: files});
        this.props.sendFile(files);
    }

    render(){
        return(
            <div className="id">
            {

                this.state.drop || this.state.uploaded ?
                <div className="drop-zone" onDragLeave={e=>this.dropHandler(e)} onDragStart={e=>this.dragHandler(e)} onDragOver={e=>this.dragHandler(e)} onDrop={e=>this.fileHandler(e)}>
                <div className="modal-drag">
                <Row>
                <img alt="id" src={id}></img>
                </Row>
                <Row>
                <span className="drop-zone__prompt">Uploaded</span>
                <input type="file" name="myFile" className="drop-zone__input"/>
                </Row>
                </div>
                <div className="modal-info">
                <Row>
                <Col md={9} xs={8} s={8}>
                <p className="modal-text">jpg, jpeg, png, pdf</p>
                </Col>
                <Col md={2} xs={3} s={3}>
                <p className="modal-text">Max 4MB</p>
                </Col>
                </Row>
                </div>
            </div>
            :
                this.state.drag ?
            <div className="drop-zone" onDragLeave={e=>this.dropHandler(e)} onDragStart={e=>this.dragHandler(e)} onDragOver={e=>this.dragHandler(e)} onDrop={e=>this.fileHandler(e)}>
                <div className="modal-drag">
                <Row>
                <img alt="id" src={id}></img>
                </Row>
                <Row>
                <span className="drop-zone__prompt">Drop your ID here</span>
                <input type="file" name="myFile" className="drop-zone__input"/>
                </Row>
                </div>
                <div className="modal-info">
                <Row>
                <Col md={9} xs={8} s={8}>
                <p className="modal-text">jpg, jpeg, png, pdf</p>
                </Col>
                <Col md={2} xs={3} s={3}>
                <p className="modal-text">Max 4MB</p>
                </Col>
                </Row>
                </div>
            </div>
            :
            <div className="drop-zone" onDragLeave={e=>this.dropHandler(e)} onDragStart={e=>this.dragHandler(e)} onDragOver={e=>this.dragHandler(e)}>
                <div className="modal-drag">
                <Row>
                <img alt="id" src={id}></img>
                </Row>
                <Row>
                <span className="drop-zone__prompt">Click or drag <br/> to add your ID here</span>
                <input type="file" name="myFile" className="drop-zone__input" id="myFile"/>
                </Row>
                </div>
                <div className="modal-info">
                <Row>
                <Col md={9} xs={8} s={8}>
                <p className="modal-text">jpg, jpeg, png, pdf</p>
                </Col>
                <Col md={2} xs={3} s={3}>
                <p className="modal-text">Max 4MB</p>
                </Col>
                </Row>
                </div>
            </div>
            }
            
            </div>
        )
    }
}

export default (IdUpload);