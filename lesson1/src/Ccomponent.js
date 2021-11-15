import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             visibility: false
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state =>({
            visibility: !state.visibility
        }));
    }

    render() {
        if (this.state.visibility) {
        return (
            <div>
                <h2>Nice to meet you!</h2>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    } else {
        return (
            <div>
                <h2>Me too!</h2>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    }
  }
}
