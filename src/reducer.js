import {Map} from 'immutable';
import InitialState from './initial.json';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = InitialState, action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }
  return state;
}
