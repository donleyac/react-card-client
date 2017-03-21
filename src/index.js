import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import InitialState from './initial.json';
import './index.scss';

const store = createStore(reducer);
store.dispatch({type: 'SET_STATE', state: InitialState});

ReactDOM.render(
    <Provider store={store}>
    {routes}
</Provider>, document.getElementById('root'));
