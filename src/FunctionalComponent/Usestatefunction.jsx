import React, { useState } from "react"

const Usestatefunction =()=>{
    const [data, SetData] = useState ( {color :"green"})
 
const setcolor =()=>{
    SetData({
    color : "red",
    
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
