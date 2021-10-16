import React, { Component } from 'react'
import ClassPropsExampleChild from './ClassPropsExampleChild'
import "./ClassPropsExampleChild.css";

export default class ClassPropsExampleParent1 extends Component {
    render() {
        return (
            <div className="main-conatiner">
               
               <ClassPropsExampleChild name="Samsung Mobile" price={20000} pic="https://m.media-amazon.com/images/I/71r69Y7BSeL._SL1500_.jpg"/>
               <ClassPropsExampleChild name="Flower" price={220} pic="https://m.media-amazon.com/images/I/61ragas49IL._SL1200_.jpg"/>
               <ClassPropsExampleChild name="Shoes Nike" price={2330} pic="https://m.media-amazon.com/images/I/71iXen7CNrL._UY625_.jpg"/>
            </div>
        );
    }
}
