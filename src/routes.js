import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeWrapper from './views/pages/HomeWrapper';
import ReposWrapper from './views/pages/ReposWrapper';

function Routes() {
  return(
    <Router>
      <Route exact path="/" component={HomeWrapper} />
      <Route exact path="/repos" component={ReposWrapper} />
    </Router>
  );
}

export default Routes;
