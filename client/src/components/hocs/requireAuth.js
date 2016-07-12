import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function (ComposedComponent) {
  class requireAuth extends Component {

    protectedComponent(){
      if(this.props.authenticated){
        return <ComposedComponent {...this.props} />;
      } else {
        return (
          <div className="alert alert-warning" role="alert">Access Denied! Please Sign In.</div>
        );
      }
    }

    render() {
      return <div>{this.protectedComponent()}</div>
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated }
  }

  return connect(mapStateToProps)(requireAuth);
}