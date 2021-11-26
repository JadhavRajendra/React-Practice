import React, { Component } from 'react'
import Classpropschildexzample4 from './Classpropschildexzample4'; 
import "./Classpropschildexzample4.css" 
export default class Classpropsparentexzample4 extends Component {
    render() {
        return (
            <div className="my-child">
               <Classpropschildexzample4 name="my car" price={20000} pic="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"/>
                 <Classpropschildexzample4 name="Flower" price={220} pic="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/3-min._SY116_CB666463598_.jpg"/>
                 <Classpropschildexzample4 name="Shoes Nike" price={2330} pic="https://m.media-amazon.com/images/I/816FGXOZEXS._UL1500_.jpg"/>
                 
            </div>
        )
    }
}
