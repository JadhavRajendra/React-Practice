import React, { Component } from 'react'

export default class StatebasicExzample extends Component {
    constructor(){
        super();
        this.state={
            name:'peter'
        }
    }
    render() {
        return (
            <div>
                <h1> hello state</h1>
            </div>
        )
    }
}

