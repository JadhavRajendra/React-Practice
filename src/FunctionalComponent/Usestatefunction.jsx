import React, { useState } from "react"

const Usestatefunction =()=>{
    const [data, SetData] = useState ( {color :"red "})
 
const setcolor =()=>{
    SetData({
    color : "green",
    
    }) 

} 
    return (

        <div style={data}>
         
            <h1> hello  shoeb </h1>
            <p> hallo rajendra </p>
            <button onClick={setcolor}>change color</button>
        </div>
        
        
    );
           
}
export default Usestatefunction;
