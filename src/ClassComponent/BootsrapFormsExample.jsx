import React, { Component } from 'react';
import { Form  }  from 'react-bootstrap';
import './BootsrapFormsExample.css';
export default class BootsrapFormsExample extends Component {
    render() {
        return (
            <div className="my-Form" >
              <Form>
               <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="name@example.com" />
               </Form.Group>
               <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label>Example textarea</Form.Label>
               <Form.Control as="textarea" rows={3} />
               </Form.Group>
              </Form>
          </div>
        )
    }
}
