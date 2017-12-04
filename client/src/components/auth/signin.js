import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router'
import * as actions from '../../actions'

class Signin extends Component {
  handleFormValues = values => {
    this.props.signinUser(values, this.props.history)
  };

  renderInput({ label, type, ...field }) {
    return (
      <fieldset className="form-group">
        <label>
          {label}:
        </label>
        <input {...field.input} type={type} className="form-control" />
      </fieldset>
    );
  };

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Oops! </strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormValues.bind(this))}>
        <Field name="email" type="text" component={this.renderInput} label="Email" />
        <Field name="password" type="password" component={this.renderInput} label="Password" />
        {this.renderAlert()}
        <button className="btn btn-primary" action="submit">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'Signin',
  fields: ['email','password']
})(
  connect(mapStateToProps, actions)(withRouter(Signin))
);
