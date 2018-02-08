import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// App Components
import Home from '../components/Home.js';
import BaseLayout from '../components/BaseLayout.js';
import Chants from '../components/Chants.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';
import Admin from '../components/Admin.js';
import SignIn from '../components/SignIn.js';

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
              <Route path="/chants" component={Chants} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/admin" component={Admin} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </BaseLayout>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
