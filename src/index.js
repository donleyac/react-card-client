import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import InitialState from './initial.json';
import './index.scss';

const store = createStore(reducer);
store.dispatch({type: 'SET_STATE', state: InitialState});

const socket = io(`${location.protocol}//${location.hostname}:8090`);

ReactDOM.render(
    <Provider store={store}>
    {routes}
</Provider>, document.getElementById('root'));
