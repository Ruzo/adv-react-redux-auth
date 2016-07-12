import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import renderField from './renderField';
import {signInFields as FIELDS} from './formFields'

const SignInForm = props => {
  const {handleSubmit, handleFormSubmit, error, submitting, invalid} = props;
  return (
    <form onSubmit = {handleSubmit(handleFormSubmit)}>
      <Field name="email" component={renderField} type="email" placeholder="Email" />
      <Field name="password" component={renderField} type="password" placeholder="Password" />
      {error && <strong>{error}</strong>}
      <button action="submit" className="btn btn-primary" disabled={submitting || invalid}>Sign In</button>
    </form>
  );
}

const validate = values => {
  const errors = {};
  for(var field in FIELDS){
    if(!values[field]){
      errors[field] = `${FIELDS[field].placeholder} must be entered.`;
    }
  }
  return errors;
}


export default reduxForm({
  form: 'signin',
  validate
})(SignInForm);