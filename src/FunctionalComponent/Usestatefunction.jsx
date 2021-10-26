import React, { useState } from "react"

const Usestatefunction =()=>{
    const [data, SetData] = Usestatefunction ({color= "red"}),
 
const setcolor =()=>{
    Setdata({
    color : "blue",
    })

} 
    return (
        <div>
           <h1>  { data.color} </h1> 
           <button  onClick ={setcolor}> color</button>
        </div>
    );
}
export default Usestatefunction;
