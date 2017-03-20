import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import './index.scss';

ReactDOM.render(routes, document.getElementById('root'));
