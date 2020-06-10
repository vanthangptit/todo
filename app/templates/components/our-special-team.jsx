import React, { Component } from "react";
import SectionTitle from "./section-title.jsx";

class OurSpecialTeam extends Component {
  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const members = this.props.data.members;

    return (
      <section className="our-special-team mb-component">
        <div className="container">
          <SectionTitle title={sectionTitle}/>

          <div className="row">
            {
              members.map((item, index) =>
                <div className="col-sm-6 col-md-4 col-lg-3 mb-component" key={index}>
                  <div className="our-special-team__columns">
                    <div className="our-special-team__top">
                      <img src={`${item.image.src}`} alt={item.image.alt}/>

                      <div className="our-special-team__social">
                        {
                          item.social.map((item, index) => {
                            return (
                              <a href={item.href} className={ `fa ${item.icon}` } key={index}/>
                            )
                          })
                        }
                      </div>
                    </div>

                    <div className="our-special-team__bottom">
                      <h5 className="our-special-team__title">{item.name}</h5>

                      <p className="our-special-team__job">
                        {item.job}
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

export default OurSpecialTeam;