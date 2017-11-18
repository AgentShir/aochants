import React, { Component } from 'react';
import '../styles/App.css';

// Components
import PopularChantsCard from '../components/PopularChantsCard.js';

class PopularChants extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the PopularChants Component</h1>
        <PopularChantsCard>
        </PopularChantsCard>
      </div>
    );
  }
}

export default PopularChants;
