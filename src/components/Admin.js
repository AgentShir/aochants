import React, { Component } from 'react';
import '../styles/App.css';

// Components
import { database } from './firebase';
// import SignIn from '../components/SignIn.js';

// Material-UI Components
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {indigo900} from 'material-ui/styles/colors';

const style = {
  margin: 12,
  primary1Color: indigo900,
  underlineStyle: {
    borderColor: indigo900
  },
};

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      newData: ''
    }

    this.dataRef = null;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
      this.dataRef = database.ref('/Chants');

      database.ref().on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    });
  }

  handleChange(event) {
    const newData = event.target.value;
      this.setState({
      newData
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <h1>Enter Chant Here</h1>
          <form className="adminForm" onSubmit={this.handleSubmit}>
            <TextField hintText="Chant Title" underlineStyle={style.underlineStyle} value={this.state.newData} onChange={this.handleChange}/><br />
            <TextField hintText="Words" underlineStyle={style.underlineStyle} multiLine={true} rowsMax={6}/><br />
            <RaisedButton backgroundColor="#B71C1C" labelColor="#FFFFFF" label="Submit" onClick={this.handleSubmit} />
          </form>
          { JSON.stringify(this.state.data, null, 2) }
      </div>
    )
  }
}

export default Admin;
