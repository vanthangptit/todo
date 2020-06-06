import React, { Component } from "react";
import SectionTitle from "./section-title.jsx";

class OurHistory extends Component {
  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const services = this.props.data.services;

    return (
      <section className="our-services mb-component">
        <div className="container">
          <SectionTitle title={sectionTitle}/>

          <article className="our-services__contain">
            {
              services.map((item, index) =>
                <div className="our-services__columns" key={index}>
                  <div className="our-services__icon">
                    <span className={"fa " + item.icon} ></span>

                  </div>

                  <div className="our-services__content">
                    <h5 className="our-services__title">{item.title}</h5>

                    <p className="our-services__description" dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              )
            }
          </article>
        </div>
      </section>
    );
  }
}

export default OurHistory