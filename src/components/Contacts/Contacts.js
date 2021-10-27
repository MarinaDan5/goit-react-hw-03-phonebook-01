import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul className="contact-list">
        {contacts.map(({ id, name, number }) => {
          return (
            <li className="contact-list__item" key={id}>
              <p>{name}</p>
              <p>{number}</p>
              <button className="button" onClick={onDelete} id={id}>
                Delete contact
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Contacts;
