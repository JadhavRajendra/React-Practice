import React, { Component } from 'react'
import "./ClassPropsExampleChild.css";
export default class ClassPropsExamplechild2 extends Component {
    render() {
        return (
            <div>
                <img src={this.props.pic}alt="pic"className="card-pic"/>
                <h2> product name: {this.props.name}</h2>
                <p> price:{this.props.price}</p>
            

            </div>
        )
    }
}
