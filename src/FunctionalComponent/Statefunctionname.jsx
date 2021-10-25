import React, { useState } from 'react'

    const Statefunctionname =() => {
        const [data,setData] =useState({firstName:"shoeb",lastName:"khan",});

    
        console.log("checking===>",data)

        var kuchBhi =()=>{
            setData({
                firstName :"rajendra",
                lastName: "Jadhav",
                firstname:"raj",
                lastname: "rathod", 
           
            })
        }
       var changename =()=>{
           setData({
            firstname:"raj",
            lastname: "rathod", 
           })
       }
    return (
        <div>
            <h1> {data.firstName} {data.lastName}</h1>
            <button onClick={kuchBhi} > hallo </button>
            <h1> {data.firstName} {data.lastName}</h1>
            <button onClick={changename} > buttom </button>
          
               </div>
    );
    }

export default Statefunctionname;