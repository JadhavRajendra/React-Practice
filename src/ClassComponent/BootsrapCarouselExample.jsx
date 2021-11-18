import React, { Component } from 'react'
import { Carousel }  from 'react-bootstrap';
import'./BootsrapCarouselExample.css';

export default class BootsrapCarouselExample extends Component {
    render() {
        return (
            <div classname="my-Corousel">
    
    <Carousel>
  <Carousel.Item className="my-name">
    <img
      className="d-block w-100"
      src="https://m.media-amazon.com/images/G/31/marketing/prime/pdp/Robin_Benefit2._CB485968652_.jpg"
      alt="First slide 1" className="my-Corousel"
    />
    <Carousel.Caption>
      <h3>First slide label 1</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="my-name">
    <img
      className="d-block w-100"
      src="https://rukminim1.flixcart.com/image/416/416/kuwzssw0/television/u/i/r/u-series-65-u1s-65uc1a00-oneplus-original-imag7xtnmnkyz7je.jpeg?q=70"
      
      alt="Second slide2"className="my-Corousel"
    />

    <Carousel.Caption>
      <h3>Second slide label 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="my-name">
    <img
      src="https://m.media-amazon.com/images/G/31/prime/detail_page/Prime_Detail_Page_PC_VideoLaunch_1344x526._CB417703432_.jpg"
      alt="Third slide 3"
    />

    <Carousel.Caption>
      <h3>Third slide label 3</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur from data by changeprogram.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        

            </div>
        )
    }
}
