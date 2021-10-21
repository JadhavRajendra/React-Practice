import React, { Component } from 'react'

export default class StatechangExzample extends Component {
    constructor(){
        super();
        this.state={
            name:'peter'
            
        }
    }
    updatestate()
    
    {
        this.setState({
            name:'bruce'
            

            }
        )
    }
    render() {
        return (
            <div>
               <h1> hello{this.state.name}</h1>
               <button onClick ={()=>{this.updatestate()}}> updatename </button> 
            </div>
        )
    }
}
