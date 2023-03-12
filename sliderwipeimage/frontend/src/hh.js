import React from "react";

import { Carousel } from "antd";
import image from './image/lottery5.jpg'
import image1 from './image/lottery6.jpg'

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79"
};

const App= () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
      {/* <img src={image}/> */}
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
      {/* <img src={image1}/> */}
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default App;
