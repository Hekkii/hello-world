import React, {Component} from 'react';
import './App.css';

class Button extends Component {
    constructor() {
        super();
        this.state = {numberOfClicks: 0};
        this.clickCounter = this.clickCounter.bind(this);
    }

    clickCounter(count) {
        let clickMultiplier = count;
        if(isNaN(count)){
            clickMultiplier = 1;
        }
        this.setState({numberOfClicks: this.state.numberOfClicks + clickMultiplier});
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <button onClick={this.clickCounter}>Yes I will buy one</button>
                <button onClick={() => {
                    this.clickCounter(2);
                }}>No. I will buy two.
                </button>
                <h2>{this.state.numberOfClicks}</h2>
            </div>
        );
    }
}

export default Button;