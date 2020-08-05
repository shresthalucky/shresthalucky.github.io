import React from 'react';
import PropTypes from 'prop-types';
import { RiLoader4Line, RiEmotionSadLine } from 'react-icons/ri';

function withLoading(Component) {
  function LoadingComponent({ isLoading, error, ...props }) {

    if (error) {
      return (
        <div className="outer-wrapper">
          <div className="outer-wrapper__cell">
            <div className="loading">
              <RiEmotionSadLine/>
              <p>Error</p>
            </div>
          </div>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="outer-wrapper">
          <div className="outer-wrapper__cell">
            <div className="loading">
              <RiLoader4Line className="loading__spinner" />
              <p>Loading</p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <Component {...props} />
    );
  }

  LoadingComponent.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
  };

  return LoadingComponent;
}

export default withLoading;
