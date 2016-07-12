import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions'

class Header extends Component {

  handleSignOut(){
    this.props.deAuthUser();
  }

  headerLinks(){
    if (this.props.authenticated) {
      return (
        [
          <li className="nav-item" key="feature"><Link to="/feature" className="nav-link">Feature</Link></li>,
          <li className="nav-item" key="signout"><Link to='/' className="nav-link" onClick={this.handleSignOut.bind(this)}>Sign Out</Link></li>
        ]
      );
    } else {
      return (
        [
          <li className="nav-item" key="signin"><Link to="/signin" className="nav-link">Sign In</Link></li>,
          <li className="nav-item" key="signup"><Link to="/signup" className="nav-link">Sign Up</Link></li>
        ]
      );
    }
  }


  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">AUTH</Link>
        <ul className="nav navbar-nav">
          {this.headerLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, actions)(Header);