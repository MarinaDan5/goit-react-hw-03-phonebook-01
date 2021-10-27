import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;
    return (
      <div className="filter-container">
        <p className="title-text">Find contacts by name</p>
        <input
          className="form__input"
          type="text"
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
