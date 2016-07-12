import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import thunk from 'redux-thunk';
import types from './actions/types';

import App from './components/app';
import Home from './components/home';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import Feature from './components/feature';
import reducers from './reducers';

const initialState = {
  form: {},
  auth: {
    authenticated: false,
    protectedData: {}
  }
};

const store = createStore(reducers, initialState, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if(localStorage.getItem('token')){
    store.dispatch({type: types.AUTH_USER});
  }

ReactDOM.render(
  <Provider store={store}>
  <Router history = {browserHistory}>
    <Route path="/" component = {App}>
      <IndexRoute component={Home} />
      <Route path="/signin" component= {SignIn} />
      <Route path="/signup" component= {SignUp} />
      <Route path="/feature" component= {Feature} />
    </Route>
  </Router>
  </Provider>
  , document.querySelector('.container'));
