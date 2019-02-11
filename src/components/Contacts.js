import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "Karen Doe",
        email: "kdoe@gmail.com",
        phone: "666-666-666"
      },
      {
        id: 3,
        name: "Steven Smith",
        email: "ssmith@gmail.com",
        phone: "444-444-444"
      }
    ]
  };
  render() {
    const { contacts } = this.state;
    return (
      <div className="card card-body mb-3">
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}
// Contacts.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired
// };

export default Contacts;
