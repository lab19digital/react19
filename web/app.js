import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore, compose } from "redux";
import {Provider} from 'react-redux';
import createSagaMiddleware from "redux-saga";
import devTools from './devtools';

// Import index reducer and sagas
import IndexReducer from "../common/redux/index.reducer";
import IndexSagas from "../common/redux/index.sagas";

// Login form
import LoginForm from './login/login.form';

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Get the Redux Chrome inspector running
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const composeEnhancers = devTools || compose;

// Create the store
const store = createStore(
  IndexReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Begin Index Saga
sagaMiddleware.run(IndexSagas);

// Initialization could happen here
// For example, initializing the API

const App = () => (
  <Provider store={store}>
    <LoginForm />
  </Provider>
)

export default App;
