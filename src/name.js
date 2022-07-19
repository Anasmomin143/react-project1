import React, { Component } from 'react'
class name extends Component {
    constructor() {
        super()
        this.state = {
            name: 'Anas'
        }
    }
    render() {
        return (
            <h1>{this.state.name}</h1>
        )
    }
}
export default name;
