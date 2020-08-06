import { TOGGLE_THEME } from '../actions/themeActions';

function themeReducer(state = localStorage.getItem('theme') || 'dark', action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'dark' ? 'light' : 'dark';
    default:
      return state;
  }
}

export default themeReducer;
