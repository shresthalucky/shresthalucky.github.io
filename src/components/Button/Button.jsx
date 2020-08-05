import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  const btnClass = props.color ? `btn--${props.color}` : '';

  switch (props.type) {
    case 'link':
      return (
        <a href={props.to} className={`btn ${btnClass} float--left`}>{props.children}</a>
      );
    default:
      return (
        <Button onClick={props.clickHandler} className={`btn ${btnClass}`}>{props.children}</Button>
      );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.string,
  color: PropTypes.string
};

export default Button;
