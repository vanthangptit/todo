import React, { Component } from "react";
import Slider from "react-slick";

class TestimonialsArea extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const backgroundImage = this.props.data.backgroundImage;
    const cards = this.props.data.cards;

    return (
      <div className="testimonials-area mb-component" style={{ backgroundImage: `url(${backgroundImage})`}}>
        <a className="testimonials-area__quate"></a>

        <div className="container testimonials-area__box">
          <Slider { ...settings } >
            {
              cards.map((item, index) =>
                <div className="testimonials-area__card" key={index}>
                  <p>{ item.descriptiion }</p>
                  <h5>{ item.title }</h5>
                </div>
              )
            }
          </Slider>
        </div>
      </div>
    );
  }
}

export default TestimonialsArea