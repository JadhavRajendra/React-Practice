import React, { Component } from 'react'
import Classpropschildexzample3 from './Classpropschildexzample3'
import "./Classpropschildexzample3.css"
export default class Classpropsparentexzample3 extends Component {
    render() {
        return (
            <div className="my-app">
                 <Classpropschildexzample3 name="my car" price={20000} pic="https://images-eu.ssl-images-amazon.com/images/I/51zhm44D90L._SY300_SX300_QL70_FMwebp_.jpg"/>
                 <Classpropschildexzample3 name="Flower" price={220} pic="https://images-eu.ssl-images-amazon.com/images/G/31/home_private_label/moritika/week27gw/xcm_banners_tvs_186x116-product-badge-4qqt8_186x116_in-en._SY116_CB663888093_.jpg"/>
                 <Classpropschildexzample3 name="Shoes Nike" price={2330} pic="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg"/>
               
            </div>
        )
    }
}
