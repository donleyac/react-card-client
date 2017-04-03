import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {setState} from './action_creators';
import io from 'socket.io-client';
import logger from 'redux-logger';

import routes from './routes.js';
import reducer from './reducer';
import socketMiddleware from './socketMiddleware.js';
import InitialState from './initial.json';
import './index.scss';

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

const createStoreWithMiddleware = applyMiddleware(
  socketMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
<Provider store={store}>
    {routes}
</Provider>, document.getElementById('root'));
