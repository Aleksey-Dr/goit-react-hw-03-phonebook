import { Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, number } = this.state;
    this.props.onSubmit(name, number);

    this.setState({
      name: '',
      number: '',
    });
  };

    render() {
      const { name, number, } = this.state;
      const handleChange = this.handleChange;

    return (
      <form className={clsx(css.form)} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInput}>
          Name
          <input
            className={clsx(css.input)}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor={this.numberInput}>
          Number
          <input
            className={clsx(css.input)}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  };
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactForm;
