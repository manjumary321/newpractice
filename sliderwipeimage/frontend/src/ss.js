// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
// import { Carousel } from 'react-carousel-minimal';
import lottery5_icons from './image/lottery5.jpg'
import lottery6_icons from './image/lottery6.jpg'
import lottery7_icons from './image/lottery7.jpg'
import axios from "axios";
import { useEffect, useState } from "react";


export default function Ss() {

    const [array, Setarray] = useState([]);
    useEffect(() => {

        let url = "http://localhost:8080/LatestDrawResult";
        let request = {};
        let header = {};
        axios
            .get(url, request, header)
            .then((res) => {
                console.log(res.data);
                Setarray(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        // <Carousel>
        <div className="carousel">
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img src={lottery5_icons} class="d-block w-100 p-2 rounded-3 " alt="1" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                            {array.map((item, index) => {
                                return (
                                    <>
                                        <label>{item.dtLotterydrawdate}</label></>)
                            })}
                            {/* <button>buy</button> */}
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={lottery6_icons} class="d-block w-100" alt="2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={lottery7_icons} class="d-block w-100" alt="3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        //  </Carousel>
    )
}
