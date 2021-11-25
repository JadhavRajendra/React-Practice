import React, { Component } from 'react'
import Classpropschildexzample2 from './Classapropschildexzample2'
import "./ClassPropsExampleChild.css";
export default class Classpropsparentexzample2 extends Component {
    render() {
        return (
            <div className="main-conatiner" >
              < Classpropschildexzample2 name="my mobile" price={400} pic="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/5-min._SY116_CB666463598_.jpg" />
              < Classpropschildexzample2 name="my shoes"  price={5000} pic="https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/Winterflip/SBCWINTERWEAR/WA-9Card-4_02._SY530_QL85_.jpg" />
              < Classpropschildexzample2 name="my laptop"price={4000} pic="https://m.media-amazon.com/images/I/81SdJG3OUjL._SL1500_.jpg"/>
              
            </div>
        )
    }
}
