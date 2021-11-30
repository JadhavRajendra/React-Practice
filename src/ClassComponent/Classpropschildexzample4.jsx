import React, { Component } from 'react';
import "./Classpropschildexzample4.css"
export default class Classpropschildexzample4 extends Component {
    render() {
        return (
            <div className="my-img">
                 <img src={this.props.pic} alt="pic" className="card-image"/>
                <h1> produtc Name :{this.props.name}</h1>
                <p> price :{this.props.price}</p>

                
            </div>
        )
    }
}
