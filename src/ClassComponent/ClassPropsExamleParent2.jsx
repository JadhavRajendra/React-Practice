import React, { Component } from 'react'
import ClassPropsExampleChild from './ClassPropsExampleChild'
import "./ClassPropsExampleChild.css";

export default class ClassPropsExamleParent2 extends Component {
    render() {
        return (
            <div className="my-contines">
                <ClassPropsExampleChild name="samsang-frige" price={30000}pic="https://m.media-amazon.com/images/I/71fa4e1KQsL._SL1500_.jpg"/>
                <ClassPropsExampleChild name="t-shirts" price={599}pic="https://m.media-amazon.com/images/I/61eyeijct5L._UL1300_.jpg"/>
                <ClassPropsExampleChild name="laptop" price={55000}pic="https://m.media-amazon.com/images/I/51jPUwqQTFL._SL1000_.jpg"/>

            </div>
        
    
        );
    }
}
