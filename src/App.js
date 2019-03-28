import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NoneAnimate from './pages/NoneAnimate';
import { CSSTransition } from 'react-transition-group';

import './App.css';
// import routes from './Routes';
const routes = [
    { path: '/', name: 'Root', Component: Home },
    { path: '/Home', name: 'Home', Component: Home },
    { path: '/about', name: 'About', Component: About }
];

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <p><Link to={`/Home`}>Home</Link></p>
              <p><Link to={`/about`}>About</Link></p>
              <p><Link to={`/noneAnimate`}>None Animate</Link></p>
          </div>
          <Route exact to={`/noneAnimate`} component={NoneAnimate} />
          {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                  {({ match }) => (
                      <CSSTransition
                          in={match != null}
                          timeout={300}
                          classNames="page"
                          unmountOnExit
                      >
                          <div className="page">
                              <Component />
                          </div>
                      </CSSTransition>
                  )}
              </Route>
          ))}
      </BrowserRouter>

    )
  }
}

export default App;
