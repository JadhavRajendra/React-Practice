import React, { Component } from 'react'

export default class StateExzample extends Component {
    constructor(){
        super();
        this.state={
        counter : 0
            
            }
        //    this.changeHandler= this.changeHandler.bind(this)
           
            }
        inCreament(){
        this.setState({
            counter : this.state.counter + 1 
        })
    }
        decRement(){
            this.setState({
                counter : this.state.counter - 1
            })
        }
         
     
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                
       < button onClick={this.inCreament.bind(this)}>Increament</button>
       < button onClick={this.decRement.bind(this)}>Increament</button>
            </div>
        );
     }
    }
