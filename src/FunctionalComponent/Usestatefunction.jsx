import React, { useState } from "react"

const Usestatefunction =()=>{
    const [data, SetData] = useState ( {color :"red"})
 
const setcolor =()=>{
    SetData({
    color : "blue",
    
    }) 

} 
    return (

        <div style={data}>
         
            <h1> hello  shoeb </h1>
            <p> hallo rajendra jadhav </p>
            <button onClick={setcolor}>change color</button>
        </div>
        
        
    );
           
}
export default Usestatefunction;
