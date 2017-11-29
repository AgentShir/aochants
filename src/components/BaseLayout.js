import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// App Components
// import PopularChants from '../components/PopularChants.js';
// import Songs from '../components/Songs.js';

// Material-UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {red900} from 'material-ui/styles/colors';
import {indigo900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: red900,
    accent1Color: indigo900
  }
});

class BaseLayout extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }
  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="AO Chants" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle} />
          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleToggle}>{<CloseIcon />}</MenuItem>
              <Link to ="/" style={{ textDecoration: "none"}}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/popularchants" style={{ textDecoration: "none"}}>
                <MenuItem>Popular Chants</MenuItem>
              </Link>
              <Link to="/songs" style={{ textDecoration: "none"}}>
                <MenuItem>Songs</MenuItem>
              </Link>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <MenuItem>About</MenuItem>
              </Link>
              <Link to="contact" style={{ textDecoration: "none"}}>
                <MenuItem>Contact</MenuItem>
              </Link>
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default BaseLayout;
