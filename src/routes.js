import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import Home from './Pages/Home/index.js';
import Config from './Pages/Config/index.js';

export default (
  <Router history={hashHistory}>
    <Route path ='/' component = {Container}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
