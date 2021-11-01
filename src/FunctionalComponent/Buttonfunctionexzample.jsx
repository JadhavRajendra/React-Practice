import React from 'react'
import'./Buttonfunctionexzample.css'
function Buttonfunctionexzample() {
    const arr1 =[{name:"shoeb",age:22,address:"nanded"},
                  {name:"Rajendra",age:23,address:"Mudkhed"},
                  {name:"ashok",age:34,address:"shodko"},
                  {name:"youraj",age:15,address:"danegoan"},
                  {name:"shubam",age:21,address:"rohipimplgoun tanda"},
                  {name:"vijay",age:26,address:"mudhked"},
                  {name:"irfan",age:24,address:"hingoli"},
                  {name:"sandip",age:21,address:"babhulgoan"},
                  {name:"prajwal",age:21,address:"nanded"} ]
    console.log(arr1)
    return (
        <div className="my-data">
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