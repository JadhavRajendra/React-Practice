import React from 'react'

export default function FragmentExample() {
    const array = [{name:'shoeb'},{name:'raj'},{name:'riyaz'},{name:'ashok'}]
    return (
        <>
           {array.map((item,i)=>(
               <ul key={i}>
                   <li>{item.name}</li>
               </ul>
           ))}
        </>
    )
}
