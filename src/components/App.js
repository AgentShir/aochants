import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Components
import BaseLayout from '../components/BaseLayout.js';
import PopularChants from '../components/PopularChants.js';
import Songs from '../components/Songs.js';
import About from '../components/About.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <BaseLayout>
          <Switch>
            <Route path="/popularchants" component={PopularChants} />
            <Route path="/songs" component={Songs} />
            <Route path="/about" component={About} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

export default App;
