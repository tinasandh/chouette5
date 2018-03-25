import ClientApi from '../api/mockClientApi';
import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadClientsSuccess(clients) {
  return {type: types.LOAD_CLIENTS_SUCCESS, clients};
}

export function loadFullApplicationSuccess(fullApplication) {
    return {type: types.LOAD_FULLAPPLICATION_SUCCESS, fullApplication};
}

// Functions below handle asynchronous calls.
// Each returns a function that accepts a dispatch.
// These are used by redux-thunk to support asynchronous interactions.
export function loadClients() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return ClientApi.getAllClients().then(clients => {
      dispatch(loadClientsSuccess(clients));
    }).catch(error => {
        console.log('error from actions',error)
      throw(error);
    });
  };
}

export function loadFullApplication(id) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return ClientApi.getFullApplication(id).then(fullApplication => {
            dispatch(loadFullApplicationSuccess(fullApplication));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}

/*export function loadFullApplication(id) {
    return function (dispatch, getState) {
        dispatch(beginAjaxCall());
        return ClientApi.getFullApplication(id).then(id => {
            id ? dispatch(loadFullApplicationSuccess(id)) : dispatch(loadFullApplicationSuccess(1));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}*/