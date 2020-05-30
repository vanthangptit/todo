import React, { Component } from "react";
import SectionTitle from "./section-title.jsx";

class OurHistory extends Component {
  render() {
    const ourHistory = this.props.data.ourHistory;
    const sectionTitle = this.props.data.sectionTitle;
    const image = this.props.data.image;
    const button = this.props.data.button;

    return (
      <section className="our-history bg-tertiary mb-component">
        <div className="our-history__columns">
          <div className="our-history__contain">
            <h5 className="our-history__label">{ourHistory}</h5>

            <SectionTitle title={sectionTitle}/>

            <a className="our-history__button" href={button.href}>
              {button.text}
            </a>
          </div>
        </div>

        <div className="our-history__columns js-our-history-columns">
          <div className="our-history__image">
            <img src={image.src} alt={image.alt}/>
          </div>
        </div>
      </section>
    );
  }
}

export default OurHistory