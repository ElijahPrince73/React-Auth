import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions'

class Signin extends Component {
  handleFormValues = values => {
    this.props.signinUser(values)
    console.log(values);
  };
  renderInput({ label, ...field }) {
    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type="text" className="form-control" />
      </fieldset>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormValues.bind(this))}>
        <Field name="email" component={this.renderInput} label="Email" />
        <Field name="password" component={this.renderInput} label="Password" />
        <button className="btn btn-primary" action="submit">
          Sign in
        </button>
      </form>
    );
  }
}

// Wrap Signin with redux Form
const reduxFormSignin = reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin);

// Export wrapped Signin container with connect helper
export default connect(null, actions)(reduxFormSignin);
