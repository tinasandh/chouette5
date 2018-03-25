import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {loadClients, loadFullApplication} from './actions/actions';


// Styles
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'
// Temp fix for reactstrap
import '../scss/core/_dropdown-menu-right.scss'

// Containers
import Full from './containers/Full/'


const store = configureStore();

// Dispatch actions to load initial state.
store.dispatch(loadClients());
const startId= 1;  // to initialState???

store.dispatch(loadFullApplication(startId));
ReactDOM.render((
  <Provider store={store}>
  <HashRouter>
    <Switch>
      <Route path="/" name="Home" component={Full}/>
    </Switch>
  </HashRouter>
  </Provider>
), document.getElementById('root'));
