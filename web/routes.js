import React from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom";

// Routes
import LoginForm from './login/login.form';
import React19 from './react19/react19';

export default () => (
  <div>
    <Route exact path={routes.login} component={LoginForm} />
    <Route exact path={routes.index} component={React19} />
  </div>
);

// Constant route names
export const routes = {
  index: "/",
  login: "/login"
};
