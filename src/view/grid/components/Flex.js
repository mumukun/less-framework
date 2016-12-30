require('normalize.css/normalize.css');
require('../../../styles/App.less');
require('../Flex.less')

import React from 'react';

let yeomanImage = require('../../../images/yeoman.png');

class Flex extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>响应式布局</h1>
        <div className="row">
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
          <div className="col-md-1">.col-md-1</div>
        </div>
        <div className="row">
          <div className="col-md-4">.col-md-4</div>
          <div className="col-md-4">.col-md-4</div>
          <div className="col-md-4">.col-md-4</div>
        </div>

        <div className="row">
          <div className="col-md-3">.col-md-3</div>
          <div className="col-md-6">.col-md-6</div>
          <div className="col-md-3">.col-md-3</div>
        </div>

        <div className="row">
          <div className="col-md-8">.col-md-8</div>
          <div className="col-md-4">.col-md-4</div>
        </div>

        <div className="row">
          <div className="col-md-8">
            .col-md-8
            <div className="row">
              <div className="col-md-6">.col-md-6</div>
              <div className="col-md-6">.col-md-6</div>
            </div>
          </div>
          <div className="col-md-4">.col-md-4</div>
        </div>


        <hr/>

        <h1>h1.标题 </h1>
        <h2>h2. 标题</h2>
        <h3>h3. heading</h3>
        <h4>h4. heading</h4>
        <h5>h5. heading</h5>
        <h6>h6. heading</h6>

        <hr/>
        <h1>徽章</h1>
        <div className="row">
          <div className="col-md-6">

            <ul className="list-group">
              <li className="list-group-item">
                <span className="badge">14</span>
                消息数量
              </li>
            </ul>
          </div>
        </div>


        <hr/>
        <h1> listGroup</h1>
        <div className="list-group">
          <a href="#" className="list-group-item active">
            阿斯顿发送到发送到
          </a>
          <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
          <a href="#" className="list-group-item">Morbi leo risus</a>
          <a href="#" className="list-group-item">Porta ac consectetur ac</a>
          <a href="#" className="list-group-item">Vestibulum at eros</a>
        </div>


        <hr/>

        <h1>表单元素</h1>
        <div className="row">
          <div className="col-md-6">
            <div className="input-group">
              <span className="input-group-addon">@</span>
              <input type="text" className="form-control" placeholder="Username"/>
            </div>

            <div className="input-group">
              <input type="text" className="form-control"/>
              <span className="input-group-addon">.00</span>
            </div>

            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input type="text" className="form-control"/>
              <span className="input-group-addon">.00</span>
            </div>
          </div>
        </div>

        
      </div>

    );
  }
}

Flex.defaultProps = {};

export default Flex;
