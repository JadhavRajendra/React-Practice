import React from 'react'
function Buttonfunctionexzample() {
    const arr1 =[{name:"shoeb",age:22,address:"nanded"},{name:"Rajendra",age:23,address:"Mudkhed"}]
    console.log(arr1)
    return (
        <div>
           {arr1.map((data)=>(
               <div>
               <h1>{data.name}</h1>
               <h2>{data.age}</h2>
               <h3>{data.address}</h3>
               </div>
    ))}
        </div>
    )
}
export default Buttonfunctionexzample;