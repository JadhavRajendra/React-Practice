import React, { useState } from "react"

const Usestatefunction =()=>{
    const [data, SetData] = useState ( {color ="red"}),
 
const setcolor =()=>{
    SetData({
    color : "blue",
    })

} 
    return (
        
        <><div>

            <h1 Style={color} />: data.color>hello </h1><button onClick={() => setcolor}> color</button></>
        </div>
        </>
        
    );
           
}
export default Usestatefunction;
