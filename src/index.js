import "react-app-polyfill/ie11";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import spanish from './spanish.js'
import Notfound from "./notfound";
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/english" component={App} />
          <Route path="/spanish" component={spanish} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  );

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();
