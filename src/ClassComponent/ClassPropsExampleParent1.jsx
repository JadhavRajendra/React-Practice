import React, { Component } from 'react'
import ClassPropsExampleChild from './ClassPropsExampleChild'
import "./ClassPropsExampleChild.css";

export default class ClassPropsExampleParent1 extends Component {
    render() {
        return (
            <div className="main-conatiner">
            
               <ClassPropsExampleChild name="my car" price={20000} pic="https://images.news18.com/ibnlive/uploads/2021/11/maruti-suzuki-s-cross-1-16369831083x2.png?impolicy=website&width=510&height=356"/>
               <ClassPropsExampleChild name="Flower" price={220} pic="https://m.media-amazon.com/images/I/61ragas49IL._SL1200_.jpg"/>
               <ClassPropsExampleChild name="Shoes Nike" price={2330} pic="https://m.media-amazon.com/images/I/71iXen7CNrL._UY625_.jpg"/>
            </div>
        );
    }
}
