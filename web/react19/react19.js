import React from 'react';

import { Link } from "react-router-dom";

export default () => (
  <div className="d-flex flex-column justify-content-center" style={{minHeight:'100vh'}}>
    <div className="d-flex flex-column align-items-center">
      <div>
        <h2>React19</h2>
        <ul>
          <li>react</li>
          <li>react-router</li>
          <li>redux</li>
          <li>redux-devtools</li>
          <li>redux-form</li>
          <li>redux-saga</li>
          <li>Bootstrap 4 (with Flexbox support)</li>
          <li>Webpack</li>
          <li>Hot-reloading</li>
        </ul>
        <Link to="login" className="btn btn-primary">Route example with form</Link>
      </div>
    </div>
  </div>
);
