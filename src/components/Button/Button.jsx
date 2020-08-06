import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {

  const btnClass = props.kind ? `btn--${props.kind}` : '';

  switch (props.type) {
    case 'link':
      return (
        <a href={props.to} className={`btn ${btnClass} float--left`}>{props.children}</a>
      );
    default:
      return (
        <button onClick={props.clickHandler} className={`btn ${btnClass}`}>{props.children}</button>
      );
  }
}

Button.propTypes = {
  type: PropTypes.string,
  to: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  kind: PropTypes.string
};

export default Button;
