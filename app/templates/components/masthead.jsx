import React, { Component } from "react";
import Cards from "./cards.jsx";
import Slider from "react-slick";

class Masthead extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Slider {...settings} >
        {
          this.props.data.map((item, index) =>
            <Cards data={item} key={index} className="item"/>
          )
        }
      </Slider>
    );
  }
}

export default Masthead