import React from 'react'
import {Form,Row,Col} from 'react-bootstrap' 
import "./BootsrapForm.css";
export default function BootsrapForms() {
    return (
        <div>
          <Form className="my-Form">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
           Email
           </Form.Label>
           <Col sm="10">
           <Form.Control plaintext readOnly defaultValue="email@example.com" />
           </Col>
           </Form.Group>

           <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
           <Form.Label column sm="2">
            Password
           </Form.Label>
           <Col sm="10">
           <Form.Control type="password" placeholder="Password" />
           </Col>
           </Form.Group>
           </Form>  
        </div>
    )
}
