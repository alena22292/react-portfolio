import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

// render an instance of the component in the DOM
ReactDOM.render(
    <Router history={history}>
      <div className="view-container">
        <Switch>
          <Route path="/" exact component={} />
        </Switch>
      </div>
    </Router>
  document.getElementById('root')
);
