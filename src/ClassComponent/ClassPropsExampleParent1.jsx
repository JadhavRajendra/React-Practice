import React, { Component } from 'react'
import ClassPropsExampleChild from './ClassPropsExampleChild'
import "./ClassPropsExampleChild.css";

export default class ClassPropsExampleParent1 extends Component {
    render() {
        return (
            <div className="main-conatiner">
            
               <ClassPropsExampleChild name="my car" price={20000} pic="https://images.news18.com/ibnlive/uploads/2021/11/maruti-suzuki-s-cross-1-16369831083x2.png?impolicy=website&width=510&height=356"/>
               <ClassPropsExampleChild name="Flower" price={220} pic="https://m.media-amazon.com/images/I/61ragas49IL._SL1200_.jpg"/>
               <ClassPropsExampleChild name="Shoes Nike" price={2330} pic="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/WRS-Jun/PC_QC_186/Comp-186/2-min._SY116_CB666463598_.jpg"/>
               
            </div>
        );
    }
}
