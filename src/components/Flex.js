require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

class Flex extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Flex  "/>
        <div className="notice"> Flex Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

Flex.defaultProps = {};

export default Flex;
