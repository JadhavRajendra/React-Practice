import React, { Component } from 'react'
import { Carousel }  from 'react-bootstrap';
import'./BootsrapCarouselExample.css';

export default class BootsrapCarouselExample extends Component {
    render() {
        return (
            <div classname="my-Corousel">
    
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.interfacemedia.com/media/2350/img-vr-tilt-brush-website-hero-shot.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        

            </div>
        )
    }
}
