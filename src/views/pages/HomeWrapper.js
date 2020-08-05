import React from 'react';

import Home from '../layouts/Home/Home';
import withWrapper from '../../hoc/withWrapper';

const EnhancedHome = withWrapper(Home);

function HomeWrapper() {
  return (
    <EnhancedHome />
  );
}

export default HomeWrapper;
