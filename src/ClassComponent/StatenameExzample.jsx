import React, { Component } from 'react'

export default class StatenameExzample extends Component {
    constructor(){
        super();
        this.State={
            name:'shoeb'

        }
    }
    render() {
        return (
            <div>
                <h1>raj{this.state.name}</h1>
                
            </div>
        );
    }
}
