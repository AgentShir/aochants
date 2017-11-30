import React, { Component } from 'react';

// Styles
import '../styles/App.css';

// App Components
import Header from '../components/Header.js';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header>
        </Header>
        {this.props.children}
      </div>
    )
  }
}

export default BaseLayout;
