import React, { Component } from "react";
import Iframe from 'react-iframe';

import SectionTitle from "./section-title.jsx";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      address: null,
      message: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    //Code handle submition
  }

  render() {
    const sectionTitle = this.props.data.sectionTitle;
    const information = this.props.data.information;
    const embed = this.props.data.embed;
    const form = this.props.data.form;

    return (
      <section className="contact-us mb-component" style={{ backgroundImage: `url(${this.props.data.backgroundImage})`}}>
        <div className="container contact-us__container">
          <SectionTitle title={sectionTitle}/>

          <div className="row contact-us__row text-secondary">
            {
              information.map((item, index) => {
                return (
                  <div className="col-sm-4 contact-us__columns" key={index}>
                    <div className="contact-us__information">
                      <span className={"contact-us__icon fa " + item.icon} ></span>
                      <p dangerouslySetInnerHTML={{ __html: item.topline }} />
                      <p>{item.botline}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <div className="row">
            <div className="col-md-6 mb-5">
              <Iframe url={embed.src}
                      width={embed.width}
                      height={embed.height}
                      id="myId"
                      className="myClassname"
                      display="initial"
                      position="relative"
                      style="border:none;overflow:hidden"
                      scrolling="no"
                      frameBorder="0"
                      allowTransparency="true"
                      allow="encrypted-media"
              />
            </div>

            <div className="col-md-6 mb-5">
              <form action="#" className="form-contact-us">
                <input type={form.name.type}
                       name={form.name.name}
                       value={this.state.name ? this.state.name : ''}
                       onChange={this.handleChange}
                       placeholder={form.name.placeholder}
                />

                <input type={form.email.type}
                       name={form.email.name}
                       value={this.state.email ? this.state.email : ''}
                       onChange={this.handleChange}
                       placeholder={form.email.placeholder}
                       required
                />

                <input type={form.address.type}
                       name={form.address.name}
                       value={this.state.name ? this.state.name : ''}
                       onChange={this.handleChange}
                       placeholder={form.address.placeholder}
                />

                <textarea value={this.state.message ? this.state.message : ''}
                          name={form.textarea.name}
                          onChange={this.handleChange}
                          placeholder={form.textarea.placeholder}
                          rows={form.textarea.rows}
                />

                <button className="our-history__button js-button-submit" type="submit">{form.buttonSubmit}</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactUs;