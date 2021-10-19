import React from 'react'
import {Badge,Breadcrumb} from 'react-bootstrap';
import "./BootsrapBadge.css";
export default function BootsrapBadge() {
    return (
        <div className="my-Badge">
         <h1>
           Example heading <Badge bg="secondary">New</Badge>
         </h1>
         <h2>
           Example heading <Badge bg="secondary">New</Badge>
         </h2>
         <h3>
           Example heading <Badge bg="secondary">New</Badge>
         </h3>
         <h4>
           Example heading <Badge bg="secondary">New</Badge>
         </h4>
         <h5>
           Example heading <Badge bg="secondary">New</Badge>
         </h5>
         <h6>
           Example heading <Badge bg="secondary">New</Badge>
         </h6>
         <Badge bg="primary">Primary</Badge> <Badge bg="secondary">Secondary</Badge>{' '}
         <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{' '}
        <Badge bg="warning" text="dark">
          Warning
        </Badge>{' '}
        <Badge bg="info">Info</Badge>{' '}
        <Badge bg="light" text="dark">
        Light
        </Badge>{' '}
        <Badge bg="dark">Dark</Badge>
        <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
         Library
         </Breadcrumb.Item>
         <Breadcrumb.Item active>Data</Breadcrumb.Item>
         </Breadcrumb>
        </div>
    )
}
