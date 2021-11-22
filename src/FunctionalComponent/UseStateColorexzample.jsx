import React, { useState } from "react"

const UseStateColorexzample =()=>{
    const [data, SetData] = useState ( {color :"red"})
 
const changecolor = () =>{
    if (data.color === "red"){
        SetData({color:"blue"});
    } else if (data.color === "red"){
        SetData({color:"blue"});
    } else if (data.color === "green"){
        SetData({color:"red"});
    } else if (data.color === "red"){
        SetData({color:"blue"});
    }
}
    return (

        <div style={data}>
         
            <h1> hello  shoeb </h1>
            <p> hallo rajendra jadhav </p>
            <button onClick={changecolor}>change color</button>
        </div>
        
        
    );
           
}
export default UseStateColorexzample;
