import React, { Component } from 'react'
import Classpropschildexzample4 from './Classpropschildexzample4'; 
import "./Classpropschildexzample4.css" 
export default class Classpropsparentexzample4 extends Component {
    render() {
        return (
            <div className="my-app">
               <Classpropschildexzample4 name="my car" price={400000} pic="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/7-min._SY116_CB666463598_.jpg"/>
                
                 
            </div>
        )
    }
}
