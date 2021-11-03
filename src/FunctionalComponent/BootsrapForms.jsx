import React from 'react'
import {Form,Row,Col,Table,Button,validated,handleSubmit} from 'react-bootstrap' 
import "./BootsrapForm.css";
export default function BootsrapForms() {
    return (
        <div>
        
            <Form className="my-Form">
           <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
          </Row>
          </Form>
  
          <Form className="my-Form">
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
      <Form.Group className="mb-3">
      <Form.Label>Disabled input</Form.Label>
       <Form.Control placeholder="Disabled input" disabled />
       </Form.Group>
       <Form.Group className="mb-3">
       <Form.Label>Disabled select menu</Form.Label>
       <Form.Select disabled>
       <option>Disabled select</option>
       </Form.Select>
       </Form.Group>
       <Form.Group className="mb-3">
       <Form.Check type="checkbox" label="Can't check this" disabled />
       </Form.Group>
       
       <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>Default file input example</Form.Label>
    <Form.Control type="file" />
  </Form.Group>
  <Form.Group controlId="formFileMultiple" className="mb-3">
    <Form.Label>Multiple files input example</Form.Label>
    <Form.Control type="file" multiple />
  </Form.Group>
  <Form.Group controlId="formFileDisabled" className="mb-3">
    <Form.Label>Disabled file input example</Form.Label>
    <Form.Control type="file" disabled />
  </Form.Group>
  <Form.Group controlId="formFileSm" className="mb-3">
    <Form.Label>Small file input example</Form.Label>
    <Form.Control type="file" size="sm" />
  </Form.Group>
  <Form.Group controlId="formFileLg" className="mb-3">
    <Form.Label>Large file input example</Form.Label>
    <Form.Control type="file" size="lg" />
  </Form.Group>
  <Form>
  {['checkbox', 'radio'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`default ${type}`}
      />

      <Form.Check
        disabled
        type={type}
        label={`disabled ${type}`}
        id={`disabled-default-${type}`}
      />
    </div>
  ))}
</Form>











































































































































































































  </Form>
        </div>
    )
}
