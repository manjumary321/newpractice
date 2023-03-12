import { Carousel } from 'react-carousel-minimal';
// import lottery_icons from './image/lottery_img1.jpg'
// import lottery1_icons from './image/lottery2.jpg'
// import lottery2_icons from './image/lottery3.jpg'
// import lottery3_icons from './image/lottery4.jpg'
import lottery5_icons from './image/lottery11.jpg'
import lottery6_icons from './image/lottery6.jpg'
import lottery7_icons from './image/lottery7.jpg'
// import lottery9_icons from './image/11.jpg'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Slider2() {

  const [array, Setarray] = useState([]);
  const [array1, setArray1] = useState([]);
  const [array2, setArray2] = useState([]);


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


  const data = [
    {
      image: lottery6_icons,
      caption: JSON.stringify(array),

    },
    {
      image: lottery5_icons,
      caption: JSON.stringify(array1),
    },
    {
      image: lottery7_icons,
      caption: JSON.stringify(array2),
    },
    // {
    //   image: lottery_icons,
    // },
    // {
    //   image: lottery1_icons
    // },
    // {
    //   image: lottery2_icons
    // },
    // {
    //   image: lottery3_icons
    // },

    // {
    // //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    // // 
    // caption: "San Francisco",

    // },
    // {
    //   image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    //   src: lottery_icons,
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    //   caption: "Darjeeling"
    // },
    // {
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    //   caption: "San Francisco"
    // },
    // {
    //   image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    //   caption: "Darjeeling"
    // },

  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  // const img ={
  //   width:"75%",
  //   height:"200%"
  // }
  return (
    <div className="App">

      <div style={{ textAlign: "center" }}>
        {/* <h2>React Carousel Minimal</h2>
        <p>Easy to use, responsive and customizable carousel component for React Projects.</p> */}

        <div style={{
          padding: "0 20px",
        }}>

          <Carousel
            data={data}
            time={2000}
            // width="850px"
            // height="500px"
            width="200%"
            height="500px"
            // img={img}
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // slideImageFit="contain"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              // maxWidth: "850px",
              // maxHeight: "500px",
              // margin: "40px auto",

            }}
          />


        </div>
      </div>
    </div>
  );
};
// xkmxk