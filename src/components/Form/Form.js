import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const contactId = uuidv4();
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          <p className="form__lable">Name </p>
          <input
            className="form__input"
            id={contactId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className="form__lable">
          <p className="form__lable"> Number</p>
          <input
            className="form__input"
            id={contactId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки"
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Add contact
        </button>
      </form>
    );
  }
}

export default Form;
