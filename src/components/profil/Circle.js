import React from "react";
import './Circle.css';

class Circle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            percentage: 50,
            uploaded: this.props.status
        };
        this.percentageCalculation = this.percentageCalculation.bind(this);
    }

    componentDidMount(){
        this.percentageCalculation();
    }

    percentageCalculation(){
        if(this.state.saved === true){
            this.setState({percentage: 100});
        } else{
            this.setState({percentage: 50});
        }
        console.log(this.state.uploaded);
    }

    render(){
        return(
            <div className="flex-wrapper">
                <div className="single-chart">
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
        );
    }
}

export default (Circle);