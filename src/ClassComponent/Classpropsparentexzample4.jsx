import React, { Component } from 'react'
import Classpropschildexzample4 from './Classpropschildexzample4'; 
import "./Classpropschildexzample4.css" 
export default class Classpropsparentexzample4 extends Component {
    render() {
        return (
            <div className="my-app">
    <Classpropschildexzample4 name='raj' price={4000}/> 
                
                 
            </div>
        )
    }
}
