import { combineReducers } from 'redux';
import {clients, fullApplication} from './reducers';
//import fullApplication from './fullApplicationReducer'
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  clients,
    fullApplication,
  ajaxCallsInProgress
});

export default rootReducer;
