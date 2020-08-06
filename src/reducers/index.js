import { combineReducers } from 'redux';

import themeReducer from './themeReducer';
import userReducer from './userReducer';
import reposReducer from './reposReducer';

const reducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  repos: reposReducer
});

export default reducer;
