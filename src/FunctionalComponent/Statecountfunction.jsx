import React, { useState } from 'react'

const Statecountfunction = ()=>{
    const  [multiplication,setmultiplication] = useState(0);
    const changhedter =()=>{
        setmultiplication (multiplication *10)
    }


    return (
        <div>
            <h1> multiplication</h1>
            <button onClick={changhedter}> multiplication10*10</button>
        </div>
    ) 
}
export default Statecountfunction;
