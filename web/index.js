import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import app from './app';

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootEl
  );

render(app);

// Hot reloading
if (module.hot){
	module.hot.accept();
}
