import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Repo from './pages/Repo/Repo';

function Routes() {
  return(
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/repo" component={Repo} />
    </Router>
  );
}

export default Routes;
