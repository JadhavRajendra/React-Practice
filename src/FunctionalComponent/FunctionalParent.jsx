import React from 'react'
import FucntionalChild from './FucntionalChild'
import "./FunctionPropsExampleChild.css";
export default function FunctionalParent() {

    return (
        <div className="main-function" >
             
            
        
             <FucntionalChild  name="flower" price={500} pic="https://m.media-amazon.com/images/I/61KTD2CnaWL._SL1101_.jpg"/>
             <FucntionalChild  name="shoes nike" price={299}pic="https://m.media-amazon.com/images/I/71Q4pdBUNEL._UL1500_.jpg"/>
             <FucntionalChild name="phone"price={50000} pic="https://m.media-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"/>
        </div>
    )
}
