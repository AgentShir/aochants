import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Material-UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import {red900} from 'material-ui/styles/colors';
import {indigo900} from 'material-ui/styles/colors';
import {grey50} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  appBar: {
    height: 40,
  },
  palette: {
    primary1Color: red900,
    canvasColor: indigo900,
    textColor: grey50
  }
});

class Header extends Component {
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
        <AppBar style={{textAlign: "center"}} title="AO Chants" iconClassNameRight="muidocs-icon-navigation-expand-more" onClick={this.handleToggle} />
          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleToggle}>{<CloseIcon />}</MenuItem>
              <Link to ="/" style={{ textDecoration: "none"}}>
                <MenuItem>Home</MenuItem>
              </Link>
              <Link to="/chants" style={{ textDecoration: "none"}}>
                <MenuItem>Chants</MenuItem>
              </Link>
{/*}              <Link to="/about" style={{ textDecoration: "none" }}>
                <MenuItem>About</MenuItem>
              </Link> */}
{/*              <Link to="/contact" style={{ textDecoration: "none"}}>
                <MenuItem>Contact</MenuItem>
              </Link> */}
              <Link to ="/admin" style={{ textDecoration: "none"}}>
                <MenuItem>Admin</MenuItem>
              </Link>
{/*             <Link to="/signin" style={{ textDecoration: "none"}}>
                <MenuItem>Sign In </MenuItem>
              </Link> */}
{/* TODO: SignIn disappears after logged in*/}
{/* TODO: Admin only shows if logged in */}
        </Drawer>
      </MuiThemeProvider>
    );
  }
}
export default Header;
