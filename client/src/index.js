import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import { AUTH_USER } from './actions/types'

import '../style/style.css'

import Header from './components/header';
import App from './components/app';
import Welcome from './components/welcome'
import Signin from './components/auth/signin'
import Signup from './components/auth/signup'
import Signout from './components/auth/signout'
import Feature from './components/feature'
import RequireAuth from './components/auth/require_auth'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('token')
// If we have a token, consider the user to be signed in

if (token) {
  // We need to update app state
  store.dispatch({ type: AUTH_USER })
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/signup" component={Signup} />
          <Route path="/feature" component={RequireAuth(Feature)} />
          <Route exact path="/" component={Welcome} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
