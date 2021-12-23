import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Starships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch('https://www.swapi.tech/api/starships')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.results
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <p> Error {error.message} </p>
        } else if (!isLoaded) {
            return <p> Loading... </p>
        } else {
            return (
                <ul>
                {items.map(item => (
                    <li key={item.name}>
                       <p> {item.name} </p>
                        <a href={item.url}>URL</a>
                    </li>
                ))}
                </ul>
            )
        }    
    }
}
