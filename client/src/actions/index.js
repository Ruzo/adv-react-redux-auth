import axios from 'axios';
import {browserHistory} from 'react-router';
import {SubmissionError} from 'redux-form';
import types from './types';

const HOST_URL = 'http://localhost:3090';

export function signInUser({email, password}){
  return function(dispatch){
    axios.post(`${HOST_URL}/signin`, {email, password})
    .then(response => {
      authorizeUser(dispatch, response.data.token);
    })
    .catch(error => {
      authError(error);
    });
  }
}

export function signUpUser({email, password}){
  return function(dispatch){
    axios.post(`${HOST_URL}/signup`, {email, password})
    .then(response => {
      authorizeUser(dispatch, response.data.token);
    })
    .catch(error => {
      authError(error);
    })
  }
}

export function deAuthUser(){
  return function(dispatch){
    dispatch({type: types.DE_AUTH_USER});
    localStorage.removeItem('token');
  }
}

export function fetchData() {
  return function (dispatch) {
    const token = localStorage.getItem('token');
    axios.get(`${HOST_URL}`, {
      headers: { authorization: token }
    })
      .then(res => {
        axios.get(`${res.data.secretAPI}`)
          .then(response => {
            dispatch({ type: types.FETCH_DATA, data: response.data });
          })
          .catch(error => authError(error));
      })
      .catch(error => authError(error));
  }
}

function authError(error) {
  console.log('Error: ', error);
  let field = '_error';
  let message;
  switch (error.status) {
    case 401:
      message = 'Wrong email and password combination.';
      break;
    case 400:
      message = 'Please enter a valid email AND password.';
      break;
    case 422:
      field = 'email';
      message = 'An account with this email already exists.';
      break;
    default:
      message = error.statusText;
      break;
  }
  // throw new SubmissionError({ [field]: message }); // not working for now
  alert(`ERROR! ${message}` ); // temporary solution
}

function authorizeUser(dispatch, token){
  dispatch({type: types.AUTH_USER});
  localStorage.setItem('token', token);
  browserHistory.push('/feature');
}