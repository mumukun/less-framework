import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Routers from './router';
import App from './components/Main';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Routers history={history}/>
), document.getElementById('app'));
