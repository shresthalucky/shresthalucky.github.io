import React from 'react';

import Nav from '../components/Nav';

function withWrapper(Component) {
  function WrapperComponent(props) {

    return (
      <div className="main-wrapper">
        <Nav />
        <Component {...props} />
      </div>
    );
  }

  return WrapperComponent;
}

export default withWrapper;
