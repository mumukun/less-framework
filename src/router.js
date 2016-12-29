/**
 * Created by mukun on 29/12/2016.
 */
import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory, browserHistory, IndexRedirect} from 'react-router';
export default class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Root}>
          <IndexRedirect to="login"/>
        </Route>
      </Router>
    )
  }
}
