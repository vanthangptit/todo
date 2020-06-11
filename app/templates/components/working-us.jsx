import React, { Component } from "react";
import Modal from './modal.jsx';

class WorkingUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {
    const left = this.props.data.left;
    const right = this.props.data.right;

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
              <a className="our-history__button js-working-us-button" href="#working-us-button" data-toggle="modal">
                {right.button}
              </a>
            </div>
          </div>
        </div>

        <Modal id="working-us-button">
          <form action="#">
            <label>
              Essay:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
      </section>
    );
  }
}

export default WorkingUs;