import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import image from './image/lottery5.jpg'
import image1 from './image/lottery6.jpg'
export default function App() {
    return (
        <div style={{ display: 'block', width: 1500, padding: 30 }}>
            <h4>React-Bootstrap Carousel Component</h4>
            <Carousel>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        // src=" https://www.javatpoint.com//wp-content/uploads/20210425122739/2-300x115.png"
                       src={image}
                        alt="Image One"
                    />
                    <Carousel.Caption>
                        <h3>Label for first slide</h3>
                        <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        // src="https://www.javatpoint.com//wp-content/uploads/20210425122716/1-300x115.png"
                        src={image1}
                        alt="Image Two"
                    />
                    <Carousel.Caption>
                        <h3>Label for second slide</h3>
                        <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}  