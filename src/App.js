import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
import Clock from './Clock';
import Toggle from './Toggle';
import LoggingButton from './LoggingButton';
import LoginControl from './LoginControl';

class App extends Component {

    getFineNumber() {
        return 17;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Clock />
                <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To not get started, do not edit <code>src/App.js</code> and save to reload. This is a fine
                    number {this.getFineNumber()}
                </p>
                <Button title="A-MEI-zing title. I'm a Mei Mei-n."/>

                <Button title="This is my title."/>

                <Toggle />
                <LoggingButton />
                <LoginControl/>
            </div>
        );
    }
}

export default App;
