import React, { Component } from "react";
import SectionTitle from './section-title.jsx';
import ReactHtmlParser from 'react-html-parser';

class Cards extends Component {
  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const introduction = this.props.data.introduction;

    return (
      <section className="about-us mb-component">
        <div className="container">
          <SectionTitle title={sectionTitle}/>

          <article className="about-us__introduction">
            {
              introduction.map((item, index) =>
                <div className="about-us__columns" key={index}>
                  <div className="about-us__icon">
                    <span className={"fa " + item.icon} ></span>
                  </div>

                  <div className="about-us__content">
                    <h5 className="about-us__title">{item.title}</h5>

                    <p className="about-us__description">
                      { ReactHtmlParser(item.description) }
                    </p>
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

export default Cards