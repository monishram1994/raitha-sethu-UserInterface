import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../images/slider-01.jpg'
import Image2 from '../images/slider-02.jpg'
import Image3 from '../images/slider-03.jpg'
// import '../styles/all.css'
// import '../styles/style.css'
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const filters = {filter: 'brightness(0.5)'};
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} style={{position: "relative"}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1}
            alt="First slide"
            style={filters}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2}
            alt="Second slide"
            style={filters}
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3}
            alt="Third slide"
            style={filters}
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel;