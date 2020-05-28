import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';

class Cards extends Component {
  render() {
    const data = this.props;

    return (
      <article className="section-title mb-component">
        <h3 className="section-title__heading">{data.title.heading}</h3>
        <p className="section-title__description">
          { ReactHtmlParser(data.title.description) }
        </p>
      </article>
    );
  }
}

export default Cards