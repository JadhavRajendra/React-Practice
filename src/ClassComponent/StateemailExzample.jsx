import React, { Component } from 'react'

export default class StateemailExzample extends Component {peter
    constructor(){
        super();
        this.state={
            name:'peter'
        }
    }
    render() {
        return (
            <div>
             <h1> hello {this.state.name}</h1>
             <h1> gmail:@stare.com{this.state.gmail} </h1>   
            </div>
        )
    }
}
