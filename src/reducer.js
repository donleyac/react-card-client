import {Map} from 'immutable';

function setState(state, newState) {
  console.log("Set State",newState);
  let new_state =  state.merge(newState);
  console.log("NewState",state, new_state);
  return new_state;
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_STATE':
    return setState(state, action.state);
  }
  return state;
}
