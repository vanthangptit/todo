import React, { Component } from "react";

class CustomerRegister extends Component {
  render() {
    const data = this.props.data;

    return (
      <section className="customer-register mb-component" style={{ backgroundImage: `url(${data.backgroundImage})`}}>
        <div className="customer-register__contain">
          <h3 className="customer-register__title">{data.title}</h3>
          <p className="customer-register__subtitle">{data.subtitle}</p>

          <form action="" className="customer-register__form">
            <input type="email" placeholder="Email" required />
            <button type="submit">{data.form.text}</button>
          </form>
        </div>
      </section>
    );
  }
}

export default CustomerRegister