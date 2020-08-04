import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/signup.component.hooks";
import Header from "./components/header.component";

const App = () => {
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path='/' component={Header} />
      </Switch>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={SignUp} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
