import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {setState} from './action_creators';
import io from 'socket.io-client';
import logger from 'redux-logger';

import routes from './routes.js';
import reducer from './reducer';
import InitialState from './initial.json';
import './index.scss';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const store = createStore(
  reducer,
  applyMiddleware(logger)
);

socket.on('state', state => store.dispatch(setState(state)));
// socket.on('state', state => console.log("From Store", store.getState()));
// socket.on('state',store.dispatch(setState(InitialState)));
// console.log("From JSON",InitialState);

ReactDOM.render(
<Provider store={store}>
    {routes}
</Provider>, document.getElementById('root'));
