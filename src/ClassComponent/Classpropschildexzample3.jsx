import React, { Component } from 'react';
import "./Classpropschildexzample3.css"

export default class Classpropschildexzample3 extends Component {
    render() {
        return (
            <div>
                <img src={this.props.pic} alt="pic" className="card-image"/>
                <h3> produtc Name:-{this.props.name}</h3>
                <p> price:-{this.props.price}</p>

            </div>
        )
    }
}
