import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import Signin from './auth/signin';


class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // Show a link to sign out
      return <Link className='nav-link' to='/signout'>Sign Out</Link>;
    }else {
      // Show a link to sign in
      return [
        <li className='nav-item' key={1}>
          <Link className='nav-link' to='/signin'>Sign In</Link>
        </li>,
        <li className='nav-item' key={2}>
          <Link className='nav-link' to='/signup'>Sign up</Link>
        </li>
      ]
    }
  }

  render() {
    return (
      <div>
        <nav className='navbar navbar-light'>
          <Link to='/' className='navbar-brand'>Redux Auth</Link>
          <ul className='nav navbar-nav'>
            {this.renderLinks()}
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect()(Header)
