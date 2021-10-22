import React, { Component } from 'react'

export default class StatecountExzample extends Component {
    constructor(){
        super();
        this.state={
        
            count:0
            
        }
    }
    updatestate(){
        this.setState(
            {
              
             count :this.state.count +1

    
            }
        )
    }
    render(){
        return (
            <div>
                <h1> count {this.state.count}</h1>
                <button onClick={()=> {this.updatestate() }}> updatecount</button>
            </div>
        )
    }
}
