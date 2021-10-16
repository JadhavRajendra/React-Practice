import React from 'react'
import "./FunctionPropsExampleChild.css";

export default function FucntionalChild(props) {
    return (
        <div >

            <img src={props.pic} alt="pic" className="pic-image"/>
            <h3>prodact name:  {props.name}</h3>
            <p>price :{props.price}</p>
        </div>
    )
}
