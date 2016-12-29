import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './router';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
  <Routers history={history}/>
), document.getElementById('app'));
