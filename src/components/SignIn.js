import React, { Component } from 'react';
import { auth, googleAuthProvider } from './firebase';

// Material-UI Components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {indigo900} from 'material-ui/styles/colors';
import PasswordField from 'material-ui-password-field'

const style = {
  margin: 12,
  primary1Color: indigo900,
  underlineStyle: {
    borderColor: indigo900
  },
};

class SignIn extends Component {
  render() {
    return (
      <div className="App">
        <TextField hintText="User Name or Email" underlineStyle={style.underlineStyle} /><br />
        <PasswordField floatingLabelText="Enter Your Password" underlineStyle={style.underlineStyle} /><br />
        <RaisedButton backgroundColor="#1A237E" labelColor="#FFFFFF" label="Sign In" style={style} onClick={() => auth.signIn(googleAuthProvider)} />
      </div>
    )
  }
}

export default SignIn;
