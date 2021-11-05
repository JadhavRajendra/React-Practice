
import React, { Component  } from 'react'
import CardHeader from 'react-bootstrap/esm/CardHeader';

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
                <button onClick ={this.setState.name}>changebutton</button>
                            </div>
        );
    }
}
    
