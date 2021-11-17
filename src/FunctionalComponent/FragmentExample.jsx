import React from 'react'

export default function FragmentExample() {
    const array = [{name:'shoeb'},{name:'raj'},{name:'riyaz'},{name:'ashok'},{name:'ashok'}, 
    {name:'youraj'},{name:'vijay'},{name:'sai'},{name:'irfan'},{name:'sandip'},{name:'dipak'},
    {name:'shrikant'},{name:'kamal'},{name: 'kamal'},{name:'rohit'},{name:'kohali'},{name:'rahul'} ,
    {name:'shubaham'},{name:'madhav'},{name:'akash'},{name:'ankush'},{name:'dinesh'},{name:'maroti'}]
    return (
        <>
           {array.map((item,i)=>(
               <ul key={i}>
                   <li>{item.name} </li>
            
               </ul>
           ))}
        </>
    )
}
