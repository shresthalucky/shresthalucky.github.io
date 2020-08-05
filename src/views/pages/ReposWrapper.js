import React from 'react';

import Repos from '../layouts/Repos/Repos';
import withWrapper from '../../hoc/withWrapper';

const EnhancedRepos = withWrapper(Repos);

function ReposWrapper() {
  return (
    <EnhancedRepos />
  );
}

export default ReposWrapper;
