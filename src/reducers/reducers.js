import * as types from '../actions/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export function clients(state = initialState.clients, action) {
  switch (action.type) {
    case types.LOAD_CLIENTS_SUCCESS:
      return action.clients;


    

    default:
      return state;
  }
}

export function fullApplication(state = initialState.fullApplication, action) {
    switch (action.type) {
        case types.LOAD_FULLAPPLICATION_SUCCESS:
            return action.fullApplication;



        default:
            return state;
    }
}


