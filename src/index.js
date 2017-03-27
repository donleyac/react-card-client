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
import {fromJS} from 'immutable';



// const store = createStore(reducer);
// store.dispatch({type: 'SET_STATE', state: InitialState});

const socket = io(`${location.protocol}//${location.hostname}:8090`);
const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

socket.on('state', state => console.log("From Store", state));
console.log("From JSON",InitialState);

// socket.on('state', state => store.dispatch(setState(state)));
socket.on('state',store.dispatch(setState(InitialState)));


ReactDOM.render(
<Provider store={store}>
    {routes}
</Provider>, document.getElementById('root'));
