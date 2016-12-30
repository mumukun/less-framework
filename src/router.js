/**
 * Created by mukun on 29/12/2016.
 */
import React, {Component} from 'react';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router';
import Root  from './common/root';
import Flex from  './view/grid/components/Flex';
export default class Routers extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Root}>
          <IndexRedirect to="grid"/>
          <Route path="grid" component={Flex}></Route>
        </Route>
      </Router>
    )
  }
}
