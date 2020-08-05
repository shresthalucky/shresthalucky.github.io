import { SET_REPOS } from '../actions/reposActions';

function reposReducer(state = {}, action) {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default reposReducer;
