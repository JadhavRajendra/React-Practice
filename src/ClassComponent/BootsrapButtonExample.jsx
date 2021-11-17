import React, { Component } from 'react';
import { Badge,Button,Table,validated,handlesubmit,} from 'react-bootstrap';
import "./BootsrapButtonExample.css";


export default class BootsrapButtonExample extends Component {
    render() {
        return (
            <div>
              <div>
              <div className="d-grid gap-2">

  <Button variant="secondary" size="lg">
    amazon
  </Button>
</div> 
  <h1>
    amazon <Badge bg="secondary">button</Badge>
  </h1>
  
</div>
           
            </div>
        )
    }
}
