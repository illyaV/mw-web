import React from 'react';
import PropTypes from 'prop-types'

import './button.css'

function Button(props) {
  const {onClick, label} = props;

  return (
    <button className="button" onClick={onClick}>{label}</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string
};

export default Button;