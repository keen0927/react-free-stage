import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

import { CSSTransition } from 'react-transition-group';

import './App.css';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <p><Link to={`/Home`}>Home</Link></p>
              <p><Link to={`/about`}>About</Link></p>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home}/>
              <CSSTransition
                  in={true}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
              >
                  <div className="page">
                    <Route path="/about" component={About}/>
                  </div>
              </CSSTransition>
          </Switch>
      </BrowserRouter>

    )
  }
}

export default App;
