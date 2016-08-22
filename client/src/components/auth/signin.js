import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import SignInForm from './signInForm';

class SignIn extends Component {

  handleFormSubmit({email, password}){
    this.props.signInUser({email, password});
  }

  render() {
    return (
      <div>
        <SignInForm handleFormSubmit = {this.handleFormSubmit.bind(this)} />
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);