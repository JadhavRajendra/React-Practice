import React, { useState } from 'react'

    const Statefunctionname =() => {
        const [data,setData] =useState({firstName:"shoeb,",lastName:"khan,"});

    
        console.log("checking===>",data)

        var kuchBhi =()=>{
            setData({
                firstName :"rajendra ",
                lastName: "Jadhav",

                
           
            })
        }
       
    return (
        <div>
            <h1> {data.firstName} {data.lastName}</h1>
            <button onClick={kuchBhi} > hallo </button>
        
          
               </div>
    );
    }

export default Statefunctionname;