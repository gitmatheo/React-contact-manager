import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = { showContactInfo: false };

  handleShow = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleDelete = () => {
    this.props.deleteClickHandler();
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            onClick={this.handleShow}
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
          <i
            className="fas fa-times"
            style={deleteStyles}
            onClick={this.handleDelete}
          />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

const deleteStyles = { cursor: "pointer", color: "red", float: "right" };

export default Contact;
