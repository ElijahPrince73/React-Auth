import axios from 'axios'
import { Route, Redirect } from 'react-router'
import {AUTH_USER} from './types';

const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}, history) {
  return function (dispatch) {
    // Submit Email/password to the server(APIyanr)
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then((response) => {
      // If request is good...
      // - Update state to indicate user is authenticated
      dispatch({type: AUTH_USER})
      // = Save JWT token
      // - Redirect to '/feature'
      history.push('/feature');
    })
    .catch(() => {
      // If request is bad...
      // - Show an error to the user
    })
  }
}
