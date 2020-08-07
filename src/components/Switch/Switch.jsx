import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

import { toggleTheme } from '../../actions/themeActions';
import Button from '../Button';

function Switch(props) {

  return (
    <Button kind="round-icon" clickHandler={props.toggleTheme}>
      {props.theme === 'dark' ? <RiSunLine /> : <RiMoonLine />}
    </Button>
  );
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTheme: () => dispatch(toggleTheme()),
  };
};

Switch.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Switch);
