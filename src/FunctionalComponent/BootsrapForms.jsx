import React from 'react'
import {Form,Row,Col,Table,Button} from 'react-bootstrap' 
import "./BootsrapForm.css";
export default function BootsrapForms() {
    return (
        <div>
            <Table striped bordered hover size="sm" className="my-table">
          <thead>
          <tr>
          <th>Namber</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          </tr>
         </thead>
         <tbody>
          <tr>
             <td>1</td>
             <td>rajendra</td>
             <td>parasram</td>
             <td>jadhav</td>
          </tr>
          <tr>
             <td>2</td>
             <td>ashok</td>
             <td>raghunath</td>
             <td>jadhav</td>
          </tr>
          <tr>
          <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
            </tbody>
          </Table>







          
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
           <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Select defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Select>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
