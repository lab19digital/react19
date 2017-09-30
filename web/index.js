import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import devTools from './devtools';
import App from './app';
import { Provider } from 'react-redux';

// Import index reducer and sagas
import IndexReducer from "../common/redux/index.reducer";
import IndexSagas from "../common/redux/index.sagas";

// Get the Redux Chrome inspector running
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
const composeEnhancers = devTools || compose;

// Saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store
const store = createStore(
  IndexReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Begin Index Saga
sagaMiddleware.run(IndexSagas);

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    rootEl
  );

render(App);

// Hot reloading
if (module.hot){
	module.hot.accept();
}
