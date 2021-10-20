import React from 'react'
import {Button} from 'react-bootstrap'
import"./BootsrapModel.css";
export default function BootsrapModal() {
    return (
        <div className="my-button">
           

         <Button variant="secondary" className="my-modal">Close</Button>
         <Button variant="primary">Save changes</Button> 
         </div>
    )
}
