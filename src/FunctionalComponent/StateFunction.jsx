import React,{useState} from 'react'


    const StateFunction=()=>{
        const [addition,setaddition]=useState(0)
        const Increament =()=>{
            setaddition (addition+1)
          
        
    }
    const Decreament =()=>{
        setaddition(addition-1)
    }
    return (
        <div>
            <h1> {addition}</h1>
            <button onClick={Increament}> add+1</button>
            <button onClick={Decreament}>sub-1</button>
        </div>
    )
}

export default StateFunction;