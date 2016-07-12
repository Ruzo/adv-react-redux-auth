import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import SignUpForm from './SignUpForm';

class SignUp extends Component {

  handleFormSubmit({email, password, passwordConfirm}){
    this.props.signUpUser({email, password, passwordConfirm});
  }

  render() {
    return (
      <div>
        <SignUpForm handleFormSubmit = {this.handleFormSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);