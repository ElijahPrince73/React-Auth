import axios from 'axios'

const ROOT_URL = 'http://localhost:3090'

export function signinUser({email, password}) {
  return function (dispatch) {
    // Submit Email/password to the server(APIyanr)
    axios.post(`${ROOT_URL}/signin`, { email, password })
    // If request is good...
    // _ Update state to indicate user is authenticated
    // _ Save the JWT token
    // _ Redirect to the route '/feature'


    // If request is bad...
    // - Show an error to the user
  }
}
