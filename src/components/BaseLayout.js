import React, { Component } from 'react';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components
import PopularChants from '../components/PopularChants.js';
import Songs from '../components/Songs.js';

// Material-UI Components
import AppBar from 'material-ui/AppBar';

class BaseLayout extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <AppBar
    title="AO Chants"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
      <h1>Hello from the other side...</h1>
      </MuiThemeProvider>
    );
  }
}

export default BaseLayout;
