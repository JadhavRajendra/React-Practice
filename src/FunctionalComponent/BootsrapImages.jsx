import React from 'react'
import {Image,Container,Row,Col}  from 'react-bootstrap';
export default function BootsrapImages() {
    return (
        <div>
            <Container>
            <Row>
            <Col xs={6} md={4}>
            <Image src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg/171x180" rounded />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg/171x180" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
            <Image src="https://www.gettyimages.com/gi-resources/images/500px/983794168.jpg/171x180" thumbnail />
            </Col>
            </Row>
            </Container>
        </div>
    )
}
