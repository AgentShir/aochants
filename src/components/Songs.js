import React, { Component } from 'react';
import '../styles/App.css';

// Components
import SongsCard from '../components/SongsCard.js';

class Songs extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the Songs Component</h1>
        <SongsCard>
        </SongsCard>
      </div>
    );
  }
}

export default Songs;
