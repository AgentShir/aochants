import React, { Component } from 'react';
import '../styles/App.css';

// Components
import aochants from '../images/aochants.jpg';

// Material-UI Components
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const cardStyle= {
  maxWidth: '50%',
  maxHeight: '70%'
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
            <CardTitle title="Welcome to AO Chants!" />
            <CardText>
              I created AO Chants as a way to have a quick reference to all of the American Outlaws chants and songs. Our job, as American Outlaws, is to positively support our team!
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
