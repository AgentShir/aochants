import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// App Components
import Home from '../components/Home.js';
import BaseLayout from '../components/BaseLayout.js';
import PopularChants from '../components/PopularChants.js';
import OtherChants from '../components/OtherChants.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';

// Styles
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <BaseLayout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/popularchants" component={PopularChants} />
              <Route path="/otherchants" component={OtherChants} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
