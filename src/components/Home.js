import React, { Component } from 'react';
import '../styles/App.css';

// Components
import aochants from '../images/aochants.jpg';

// Material-UI Components
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const cardStyle= {
  maxWidth: '70%',
  maxHeight: '100%',
}

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Card style={cardStyle}>
            <CardMedia>
              <img src={aochants} alt="The American Outlaws in Sandy, Utah" />
            </CardMedia>
            <CardTitle style={{textAlign: "center"}} title="Welcome to AO Chants!" />
            <CardText>
              AO Chants was created as a quick reference of some of the chants and songs used by the American Outlaws.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
