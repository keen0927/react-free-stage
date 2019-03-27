import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import About from './pages/About';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <p><Link to={`/`}>홈으로</Link></p>
              <p><Link to={`/posts`}>포스트로</Link></p>
              <p><Link to={`/about`}>About</Link></p>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/posts" component={Posts}/>
          </Switch>

      </BrowserRouter>

    )
  }
}

export default App;
