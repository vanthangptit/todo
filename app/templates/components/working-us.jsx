import React, { Component } from "react";
import Modal from './modal.jsx';

class WorkingUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
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
    const left = this.props.data.left;
    const right = this.props.data.right;
    const modalId = "working-us-button";

    return (
      <section className="working-us mb-component">
        <div className="working-us__row">
          <div className="working-us__columns">
            <div className="working-us__image">
              <img src={`${left.image}`} alt=""/>
            </div>
          </div>

          <div className="working-us__columns working-us__columns--backdrop" style={{ backgroundImage: `url(${right.image})`}}>
            <div className="working-us__content text-secondary">
              <h3 className="working-us__title">{right.title}</h3>
              <p className="working-us__subtitle" dangerouslySetInnerHTML={{ __html: right.subtitle }} />
              <a className="our-history__button js-working-us-button" href={'#' + modalId} data-toggle="modal">
                {right.button}
              </a>
            </div>
          </div>
        </div>

        <Modal id={modalId}>
          <form action="#" className="form-contact">
            <label>
              Name:
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
            </label>
            <label>
              Message:
              <textarea value={this.state.message} name="message" onChange={this.handleChange} />
            </label>
            <input className="button-submit" type="submit" value="Submit" />
          </form>
        </Modal>
      </section>
    );
  }
}

export default WorkingUs;