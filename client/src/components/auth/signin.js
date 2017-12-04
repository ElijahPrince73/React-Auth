import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router'
import * as actions from '../../actions'

class Signin extends Component {
  handleFormValues = values => {
    this.props.signinUser(values, this.props.history)
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

export default reduxForm({
  form: 'Signin',
  fields: ['email','password']
})(
  connect(null,actions)(withRouter(Signin))
);
