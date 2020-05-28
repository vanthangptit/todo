import React, { Component } from "react";

class Cards extends Component {
  render() {
    return (
      <a className="slide-card" href={this.props.data.href} key={this.props.key}>
        <img src={this.props.data.image} alt={this.props.data.alt} />
      </a>
    );
  }
}

export default Cards