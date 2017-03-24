import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {setState} from './action_creators';
import remoteActionMiddleware from './remote_action_middleware';
import io from 'socket.io-client';
import reducer from './reducer';
import InitialState from './initial.json';
import './index.scss';

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(reducer);
// store.dispatch({type: 'SET_STATE', state: InitialState});

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState)
);

ReactDOM.render(
<Provider store={store}>
    {routes}
</Provider>, document.getElementById('root'));
