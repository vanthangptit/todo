import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;