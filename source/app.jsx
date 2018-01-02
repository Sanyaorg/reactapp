'use strict';
import React from 'react';
import {render} from 'react-dom';
var createReactClass = require('create-react-class');

const App = createReactClass({
  render() {
    return (
      <section>
        <h1>My scaffold</h1>
        <p>The world is mine</p>
      </section>
    );
  }
});
render(
  <App/>, document.getElementById('container'));
