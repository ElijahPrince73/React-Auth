import React, {Component} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';

const renderInput=({label, type, ...field,meta: {touched, error, warning}})=>{
 return(
 <fieldset className="form-group">
   <label>{label}:</label>
   <input {...field.input} type={type} className="form-control" />
   {touched && error && <span className="error">{error}</span>}
 </fieldset>
 )
}

class Signup extends Component {
   handleFormValues=values=>{
   this.props.signupUser({email:values.email, password:values.password, passwordConfirm:values.passwordConfirm});
 }
 render(){
   const {handleSubmit}=this.props;
     return (
     <form onSubmit={handleSubmit(this.handleFormValues)}>
       <Field name="email" component={renderInput} type="text" label="Email" />
       <Field name="password" type="password" component={renderInput} label="Password" />
       <Field name="passwordConfirm" type="password" component={renderInput} label="Confirm Password" />
       <button className="btn btn-primary" type="submit">
         Sign up!
       </button>
     </form>
     )
   }
}
function validate(formProps){
   const errors={};

   if(!formProps.email) errors.email='Please enter an email';
   if(!formProps.password) errors.password='Please enter an password';
   if(!formProps.passwordConfirm) errors.passwordConfirm='Please enter an passwordConfirm';
   if(formProps.password!=formProps.passwordConfirm){
   errors.password='Passwords must match!';
   }
   return errors;
}
export default reduxForm({
 form: 'signup',
 fields: ['email','password','passwordConfirm'],
 validate
})(Signup);
