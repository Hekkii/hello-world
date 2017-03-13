/**
 * Created by Henrik on 13/03/2017.
 */
import React, {Component} from 'react';
import './App.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'white'}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        alert('Are you sure you want a ' + this.state.value + ' t-shirt? eww...');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit()}>
                <label>
                    Pick a t-shirt color
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="white">White</option>
                        <option value="red">Red</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }

}

export default Form;