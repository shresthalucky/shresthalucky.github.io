import React from 'react';

import Nav from '../components/Nav';

function withWrapper(Component) {
  function WrapperComponent(props) {

    return (
      <div className="main-wrapper">
        <div className="container">
          <Nav />
          <Component {...props} />
        </div>
      </div>
    );
  }

  return WrapperComponent;
}

export default withWrapper;
