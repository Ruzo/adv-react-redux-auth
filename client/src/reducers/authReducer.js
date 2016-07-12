import types from '../actions/types';

export default function(state = {}, action){
  switch (action.type) {
    case types.AUTH_USER:
      return Object.assign({}, state, {authenticated: true});
    case types.DE_AUTH_USER:
      return Object.assign({}, state, {authenticated: false});
    case types.AUTH_ERROR:
      return Object.assign({}, state, {error: action.message});
    case types.CLEAR_ERROR:
      return Object.assign({}, state, {error: null});
    case types.FETCH_DATA:
      return Object.assign({}, state, {protectedData: action.data});
    default:
      return state;
  }
}