import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';

class App extends Component {

    getFineNumber() {
        return 17;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1>Hello world</h1>
                <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To not get started, do not edit <code>src/App.js</code> and save to reload. This is a fine
                    number {this.getFineNumber()}
                </p>
                <Button title="A-MEI-zing title. I'm a Mei Mei-n."/>

                <Button title="This is my title."/>

            </div>
        );
    }
}

export default App;
