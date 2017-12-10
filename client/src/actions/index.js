import axios from 'axios'
import { Route, Redirect } from 'react-router'
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_MESSAGE } from './types';

const ROOT_URL = 'http://localhost:3090'

export function signinUser({ email, password }, history) {
  return function(dispatch) {
    // Submit Email/password to the server(APIyanr)
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then((response) => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER })
        // - Save JWT token
        localStorage.setItem('token', response.data.token)
        // - Redirect to '/feature'
        history.push('/feature');
      })
      .catch(() => {
        // If request is bad...

        // - Show an error to the user
        dispatch(authError('Bad Login Info'))
      })
  }
}

export function signupUser({ email, password }, history) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then((response) => {
        console.log(response);
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        history.push('/feature');
      })
      .catch(response => {
        dispatch(authError("You done fudged up man"));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  // Logs user out and deletes token
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        })
      })
  }
}