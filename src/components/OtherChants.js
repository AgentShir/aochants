import React, { Component } from 'react';
import '../styles/App.css';

// Components
import OtherChantsCard from '../components/OtherChantsCard.js';

class OtherChants extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the OtherChants Component</h1>
        <OtherChantsCard>
        </OtherChantsCard>
      </div>
    );
  }
}

export default OtherChants;
