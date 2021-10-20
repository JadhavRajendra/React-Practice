import React, { Component } from 'react'
import{Container,Row,Col,Table} from 'react-bootstrap'
import'./BootsrapLayout.css';
export default class BootsrapLayout extends Component {
    render() {
        return (
            <div>
             <Container fluid>
             <Row>
             <Col>1 of 1</Col>
             </Row> 
             </Container> 
             <Container>
             <Row className="justify-content-md-center">
             <Col xs lg="2">
              1 of 3
             </Col>
             <Col md="auto">Variable width content</Col>
             <Col xs lg="2">
               3 of 3
             </Col>
             </Row>
             <Row>
             <Col>1 of 3</Col>
             <Col md="auto">Variable width content</Col>
             <Col xs lg="2">
              3 of 3
             </Col>
             </Row>
             </Container>
             <Table striped bordered hover variant="dark">
               <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
                 </tbody>
               </Table>
               <Table responsive className="my-table">
               <thead className="my-table">
              <tr>
              <th>#</th>
              {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>Table heading</th>
              ))}
              </tr>
              </thead>
             <tbody>
             <tr>
             <td>1</td>
             {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
             ))}
             </tr>
           <tr>
           <td>2</td>
            {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
             ))}
           </tr>
           <tr>
            <td>3</td>
            {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
            ))}
            </tr>
           </tbody>
           </Table>
                
            </div>
        )
    }
}

