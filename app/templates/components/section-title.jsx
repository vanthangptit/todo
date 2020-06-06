import React, { Component } from "react";

class Cards extends Component {
  render() {
    const data = this.props.title;

    return (
      <article className="section-title mb-component">
        <h3 className="section-title__heading">{data.heading}</h3>
        <p className="section-title__description" dangerouslySetInnerHTML={{ __html: data.description }} />
      </article>
    );
  }
}

export default Cards