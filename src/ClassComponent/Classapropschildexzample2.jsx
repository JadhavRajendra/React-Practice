import React, { Component } from 'react'

export default class Classapropschildexzample2 extends Component {
    render() {
        return (
            <div>
                <ime src={this.props.pic} alt="pic" classname=""/>
                <h3> produtc Name:-{this.props.name}</h3>
                <p> price:-{this.props.price}</p>

            </div>
        )
    }
}
