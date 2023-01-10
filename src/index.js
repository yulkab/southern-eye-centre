import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import rootReducer from './redux/reducers'

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from './redux/reducers'; //import * as reducers from 'reducers';
import * as asyncInitialState from 'redux-async-initial-state';

import './main.scss'
import App from './App'


// //const store = createStore(rootReducer);


// // We need outerReducer to replace full state as soon as it loaded
const reducer = asyncInitialState.outerReducer(combineReducers({
  ...reducers,
  // We need innerReducer to store loading state, i.e. for showing loading spinner
  // If you don't need to handle loading state you may skip it
  asyncInitialState: asyncInitialState.innerReducer,
}));

// Load state function
// Should return promise that resolves application state
const loadStore = () => {
  return new Promise(resolve => {
    fetch('./data/doctors.json')
      .then(response => response.json())
      .then(resolve);
  });
}

const store = createStore(
    reducer,
    compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
  );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
