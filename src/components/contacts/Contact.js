import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../Context";

class Contact extends Component {
  state = { showContactInfo: false };

  handleShow = () => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
    });
  };

  handleDelete = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
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
                  onClick={this.handleDelete.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};

const deleteStyles = { cursor: "pointer", color: "red", float: "right" };

export default Contact;
