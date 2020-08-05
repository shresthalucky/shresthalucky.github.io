import { combineReducers } from 'redux';

import userReducer from './userReducer';
import reposReducer from './reposReducer';

const reducer = combineReducers({
  user: userReducer,
  repos: reposReducer
});

export default reducer;
