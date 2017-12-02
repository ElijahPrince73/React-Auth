import React, { Component } from 'react'
import {reduxForm} from 'redux-form'

class Signin extends Component {
  render() {
    return (
      <div>
        <form>
          <fieldset className='form-group'>
            <label className='form-control'>Email</label>
          </fieldset>
          <fieldset className='form-group'>
            <label className='form-control'>Password</label>
          </fieldset>
          <button action='submit' className='btn btn-primary'>Sign In</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)
