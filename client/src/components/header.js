import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Signin from './auth/signin';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-light'>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link to='/signin'>Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header
