import React, { Component } from 'react'
import "./ClassPropsExampleChild.css"
export default class ClassPropsExampleChild extends Component {
    render() {
        return (
            <div >
                
                <img src={this.props.pic} alt="pic" className="card-image"/>
                <h3> produtc Name:-{this.props.name}</h3>
                <p> price:-{this.props.price}</p>

                
            </div>
        )
    }
}
