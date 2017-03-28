/**
 * Created by Henrik on 27/03/2017.
 */

import React, {Component} from 'react';

class Toggle extends Component{
    constructor(){
        super();
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }


}

export default Toggle;