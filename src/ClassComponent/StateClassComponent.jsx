
import React, { Component  } from 'react'

export default class stateclasscomponent extends Component {
    constructor(){
        super();
        this.state= {
            name:'youraj'
        }
    }
    render() {
        return (
            <div>
                <h1>hallo {this.state.name}</h1>
            </div>
        );
    }
}
    
