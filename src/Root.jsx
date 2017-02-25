import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store.js';

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {this.props.routes()}
        </Router>
      </Provider>
    );
  }
}
