import React, {Component} from 'react';
import {connect} from 'react-redux';
import jquery from 'jquery';
import requireAuth from './hocs/requireAuth';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount(){
    this.props.fetchData();
  }
  render() {
    const {protectedData} = this.props;
    return (
      <div>
        <h4>Special Feature: Nasa's Secret Picture of the day :)</h4>
        <h2>{protectedData.title}</h2>
        <a href={protectedData.hdurl}>
          <img src={protectedData.url} alt="Click on image for the HD version" />
        </a>
        <p>{protectedData.explanation}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return { protectedData: state.auth.protectedData }
}

export default requireAuth(connect(mapStateToProps, actions)(Feature));