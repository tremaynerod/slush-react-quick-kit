'use strict'
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styles from "./example.css"

import * as ExampleActions from '../../actions/ExampleActions';

@connect(state => ({
  reducer: state.reducer
}), dispatch => ({
  actions: bindActionCreators(ExampleActions, dispatch)
}))

export default class Example extends Component {
  render() {
    var reducer = this.props.reducer;
    return (
      <div className={ styles.numbersContainer }>
        <p className={ styles.numbers }>{reducer.numberList}</p>
        <button onClick={this.props.actions.addNewNumber}>ADD</button>
      </div>
    );
  }
}