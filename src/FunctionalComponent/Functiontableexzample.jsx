import React from 'react';  
 import'./Functiontableexzample.css'   
function Functiontableexzample () { 

    
 const students = [  
              {  
                id: 1,   
                name: 'Jack',   
                email: 'jack@gmail.com',
                address: 'pune',
                city: 'pune',
                states: 'maharastra'
                    
              },  
              {  
                id: 2,   
                name: 'Mary',   
                email: '?mary@gmail.com',
                address: 'mudhked',
                city:'loha',
                states:'karnatka'
              },  
              {  
                id: 3,   
                name: 'John',   
                email: 'john@gmail.com',
                address : 'Nanded',
                city:'mudhked',
                states:'gova'
                
              },  
          ];  
    
  return (  
    <div className="container" className="my-t">  
        <h1> Example of React Map Loop </h1>  
     
        <table className="table table-bordered">  
            <tr>  
                <th>ID</th>  
                <th>Name</th>  
                <th>Email</th>
                 <th>address</th>
                 <th>city</th>
                 <td>states</td>
            </tr>  
    
            {students.map((student, index) => (  
              <tr data-index={index}>  
                <td>{student.id}</td>  
                <td>{student.name}</td>  
                <td>{student.email}</td>
                <td>{student.address} </td>
                <td>{student.city}</td>
                <td>{student.states}</td>
                <td></td>
              </tr>  
            ))}  
    
        </table>  
    
    </div>  
  );  
}  
    
export default Functiontableexzample;  