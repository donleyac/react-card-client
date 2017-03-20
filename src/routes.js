import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Pages/Home/index.js';
import Config from './Pages/Config/index.js';
import Test from './Pages/Test/index.js';
export default(
    <Router>
        <div>
            <Route exact path='/' component={Home}/>
            <Route path='/test' component={Test}/>
        </div>
    </Router>
);
