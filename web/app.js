import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from './routes';

// Initialization could happen here
// For example, initializing the API

const App = () => (
  <Router>
    <Routes />
  </Router>
);

export default App;
