import Carousel from 'react-bootstrap/Carousel';
import lottery_icons from './image/lottery_img1.jpg'
import lottery1_icons from './image/lottery2.jpg'
import lottery2_icons from './image/lottery3.jpg'
import lottery3_icons from './image/lottery4.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holde.js/800x400?text=First slide&bg=373940"
        src={lottery3_icons}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button onClick > buy</button>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
        //   src="holder.js/800x400?text=Second slide&bg=282c34"
        src={lottery1_icons}
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
        //   src="holder.js/800x400?text=Third slide&bg=20232a"
        src={lottery2_icons}
          alt="Third slide"
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

export default UncontrolledExample;