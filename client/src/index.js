import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'

import App from './components/app';
import Signin from './components/auth/signin'
import Feature from './components/feature'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route path='/' component={App}></Route>
        <Route path='/signin' component={Signin}></Route>
        <Route path='/feature' component={Feature}></Route>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));
