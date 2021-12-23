import React from "react";

export class TestState extends React.Component {
    state = {
        invisible: false,
    }


    handleClick() {
        const { invisible } = this.state;
        this.setState({
            invisible: !invisible
        });
    }

    render() {
        const { invisible } = this.state;


        return (
            <div>
                <button onClick={() => this.handleClick()}>CLICK ME</button>
                {invisible ? (<p>ON</p>) : (<p>OFF</p>)}
            </div>

        );
    }
}