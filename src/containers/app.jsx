import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './Common/wrapper';
import Home from './Page/home';
import About from './Page/about';
import Service from './Page/service';
import Portfolio from './Page/portfolio';

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            path="/about"
            component={About}
          />
          <Route
            path="/service"
            component={Service}
          />
          <Route
            path="/portfolio"
            component={Portfolio}
          />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
