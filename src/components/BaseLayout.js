import React, { Component } from 'react';
import '../styles/App.css';

// Components
import PopularChants from '../components/PopularChants.js';
import Songs from '../components/Songs.js';

class BaseLayout extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the BaseLayout component</h1>
        <PopularChants>
        </PopularChants>
        <Songs>
        </Songs>
      </div>
    );
  }
}

export default BaseLayout;
