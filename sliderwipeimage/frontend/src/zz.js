import './zz.css';
import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

import lottery5_icons from './image/lottery11.jpg'
// import lottery6_icons from './image/lottery6.jpg'
import lottery6_icons from './image/lottery10.jpg'
import lottery7_icons from './image/lottery12.jpg'

import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';




export default function BootstrapCarousel() {

        const [array, setArray] = useState([]);
        const [array1, setArray1] = useState([]);
        const [array2, setArray2] = useState([]);
        const navigate = useNavigate();  //navigate

        // const [hover, setHover] = useState([false]);

        // const handleMouseEnter = (e) => {
        //         setHover = { hover: true }
        // }
        // const handleMouseLeave = (e) => {
        //         setHover = { hover: true }
        // }
        const handleClick = (e) => {
                navigate('/dd')
        }

        useEffect(() => {

                let url = "http://localhost:8080/LatestDrawResult";
                let request = {};
                let header = {};
                axios
                        .get(url, request, header)
                        .then((res) => {
                                console.log(res.data);
                                setArray(res.data);
                        })
                        .catch((err) => {
                                console.log(err);
                        });

                let url1 = "http://localhost:8080/LatestLottery";
                let request1 = {};
                let header1 = {};
                axios
                        .get(url1, request1, header1)
                        .then((res) => {
                                console.log(res.data);
                                setArray1(res.data);
                        })
                        .catch((err) => {
                                console.log(err);
                        });

                let url2 = "http://localhost:8080/TicketAnnouncent";
                let request2 = {};
                let header2 = {};
                axios
                        .get(url2, request2, header2)
                        .then((res) => {
                                console.log(res.data);
                                setArray2(res.data);
                        })
                        .catch((err) => {
                                console.log(err);
                        });


        }, []);


        return (
                <div>
                        {/* <div class='container-fluid' >  
                          <div className="row title" style={{ marginBottom: "20px" }} >  
                          <div class="col-sm-12 btn btn-warning">  
                          How To Use Bootstrap Carousel In ReactJS  
                         </div>  
                         </div>  
                         </div>   */}

                        <div className='container-fluid' >
                                <div style={{
                                        padding: "0 0px",
                                        paddingTop: "10px"
                                }}>
                                        <Carousel >

                                                {/* one slider */}

                                                <Carousel.Item
                                                        style={{
                                                                'height': "500px",
                                                                // 'width':"100%",
                                                                'border-radius': " 20px"
                                                        }}>
                                                        <img
                                                                style={{
                                                                        'height': "500px",
                                                                        'border-radius': " 20px"
                                                                }}
                                                                className="d-block w-100"
                                                                // src={'assets/img/img2.jpg'} 
                                                                src={lottery6_icons}
                                                        />
                                                        <Carousel.Caption
                                                                style={{
                                                                        'font-size': " 2em",
                                                                        'textAlign': "center",

                                                                }}
                                                                >
                                                                <h3
                                                                        style={{
                                                                                'font-size': " 2em",
                                                                                'textAlign': "center",
                                                                                'marginBottom': "60px"

                                                                        }}>

                                                                        Latest Lottery Result
                                                                </h3>
                                                                {array.map((item, index) => {
                                                                        return (
                                                                                <>
                                                                                        <label
                                                                                                style={{
                                                                                                        'font-size': " 1.2em",
                                                                                                        'marginBottom': "30px",
                                                                                                        'marginRight': "40px"
                                                                                                }}
                                                                                        >
                                                                                                Lottery Name : {item.LotteryName}
                                                                                        </label>
                                                                                        <label
                                                                                                style={{
                                                                                                        'font-size': " 1.2em",
                                                                                                        'marginBottom': "30px",
                                                                                                        'marginRight': "10px"
                                                                                                }}
                                                                                        >
                                                                                               Date : {item.Date}
                                                                                        </label><br></br>
                                                                                        <label
                                                                                                style={{
                                                                                                        'font-size': " 1.2em",
                                                                                                        'marginBottom': "90px",
                                                                                                        'marginRight':"40px"
                                                                                                }}
                                                                                        >
                                                                                               PrizeMoney : {item.PrizeMoney}
                                                                                        </label>
                                                                                        <label
                                                                                                style={{
                                                                                                        'font-size': " 1.2em",
                                                                                                        'marginBottom': "90px",
                                                                                                        'marginRight':"0px"
                                                                                                }}
                                                                                        >
                                                                                               LotteryResult : {item.LotteryResult}
                                                                                        </label>
                                                                                </>)
                                                                })}
                                                        </Carousel.Caption>
                                                </Carousel.Item  >

                                                {/* Two slider */}

                                                <Carousel.Item
                                                        style={{
                                                                'height': "500px",
                                                                'border-radius': " 20px"
                                                        }}>
                                                        <img
                                                                style={{
                                                                        'height': "500px",
                                                                        'border-radius': " 20px"
                                                                }}
                                                                className="d-block w-100"
                                                                //     src={'assets/img/img1.jpg'} 
                                                                src={lottery5_icons}

                                                        />
                                                        <Carousel.Caption
                                                                // style={{
                                                                //         'font-size': " 2em",
                                                                //         'textAlign': "center",
                                                                // }}
                                                                >
                                                                <h3
                                                                        style={{
                                                                                
                                                                                'font-size': " 4em",
                                                                                'textAlign': "center",
                                                                                'marginBottom': "120px",
                                                                                'color':"black"

                                                                        }}>

                                                                        Latest Draws
                                                                </h3>
                                                                {array1.map((item, index) => {
                                                                        return (
                                                                                <>
                                                                                        {/* <label
                                                                                                style={{
                                                                                                        'color':" goldenrod",
                                                                                                        'marginBottom': "20px",
                                                                                                        'marginRight':"10px"
                                                                                                }}
                                                                                        >
                                                                                                {item.LotteryName}
                                                                                        </label><br></br> */}
                                                                                        <label
                                                                                                style={{
                                                                                                        // 'color': " goldenrod",
                                                                                                        'color': " black",
                                                                                                        'font-size': " 2.5em",
                                                                                                        'marginBottom': "10px",
                                                                                                        'marginRight': "10px"
                                                                                                       }}
                                                                                        >
                                                                                             Date : {item.Date}
                                                                                        </label><br></br>
                                                                                        <label
                                                                                                style={{
                                                                                                        // 'color': " goldenrod",
                                                                                                        'color': " black",
                                                                                                        'font-size': " 2.5em",
                                                                                                        'marginBottom': "80px",
                                                                                                        'marginRight': "100px"
                                                                                                }}
                                                                                        >
                                                                                               PrizeMoney : {item.PrizeMoney}
                                                                                        </label><br></br>
                                                                                </>)
                                                                })}
                                                                <button 
                                                                        className="slider_button"
                                                                        onClick={(e) => handleClick(e)}
                                                                        // onMouseEnter={(e) => handleMouseEnter(e)}
                                                                        // onMouseLeave={(e) => handleMouseLeave(e)}
                                                                        style={{
                                                                                'font-size': " 1em",
                                                                                // 'color':" goldenrod",
                                                                                'color': "  white",
                                                                                'backgroundColor':" rgb(111, 214, 214)",
                                                                                // 'backgroundColor': " goldenrod",
                                                                                'textAlign': "center",
                                                                                'outline': "none",
                                                                                'border': "none",
                                                                                'borderRadius': "8px",
                                                                                'width': "15%",
                                                                                'height':"45px",
                                                                                'marginBottom': "10px",
                                                                                // ':hover' :{'backgroundColor':`green`}
                                                                                // ...(hover || {backgroundColor: `green`}),
                                                                                
                                                                               
                                                                        }}


                                                                >
                                                                        Buy Now
                                                                </button>
                                                        </Carousel.Caption>
                                                </Carousel.Item>

                                                {/* Three slider */}

                                                <Carousel.Item
                                                        style={{
                                                                'height': "500px",
                                                                'border-radius': " 20px"
                                                        }}>
                                                        <img
                                                                style={{
                                                                        'height': "500px",
                                                                        'border-radius': " 20px"
                                                                }}
                                                                className="d-block w-100"
                                                                //  src={'assets/img/img3.jpg'} 
                                                                src={lottery7_icons}
                                                        />
                                                        <Carousel.Caption>
                                                                {/* <h3>Third Demo</h3> */}
                                                                <label
                                                                        style={{
                                                                                'font-size': " 4em",
                                                                                'textAlign': "center",
                                                                                'marginBottom': "90px",
                                                                                'color':"black"
                                                                        }}
                                                                >
                                                                        New Ticket Announcent
                                                                </label><br></br>
                                                                {array2.map((item, index) => {
                                                                        return (
                                                                                <>
                                                                                        <label
                                                                                                style={{
                                                                                                         // 'color': " goldenrod",
                                                                                                         'color': " black",
                                                                                                         'font-size': " 2.5em",
                                                                                                         'marginBottom': "10px",
                                                                                                         'marginRight': "100px"
                                                                                                }}
                                                                                        >
                                                                                               LotteryName : {item.LotteryName}
                                                                                        </label><br></br>
                                                                                        <label
                                                                                                style={{
                                                                                                         // 'color': " goldenrod",
                                                                                                         'color': " black",
                                                                                                         'font-size': " 2.5em",
                                                                                                         'marginBottom': "100px",
                                                                                                         'marginRight': "10px"
                                                                                                }}
                                                                                        >
                                                                                              Date : {item.Date}
                                                                                        </label><br></br>
                                                                                </>)
                                                                })}


                                                        </Carousel.Caption>
                                                </Carousel.Item>
                                        </Carousel>
                                </div>
                        </div>
                </div>
        )
}  
