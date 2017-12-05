import React, { Component } from 'react';
import '../styles/App.css';

// Components
import aoMe from '../images/ao_me.jpg';

// Material-UI Components
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const cardStyle = {
  maxWidth: '70%',
  maxHeight: '100%',
}

class About extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <Card style={cardStyle}>
            <CardMedia>
              <img src={aoMe} alt="Me, Attending a US Soccer friendly in Utah" />
            </CardMedia>
            <CardTitle style={{textAlign: "center"}} title="About AO Chants" />
            <CardText>
              My name is Shireen and I'm a member of the American Outlaws, an unofficial supporters group of the US National Soccer Team.  While I was at a US Men's friendly match in Utah, I was trying to find out the words to one of the chants.  The chants section on the AO website is messy and unwiedly.  I created AO Chants as an easier way to access the chants, and an exercise for me, as this is one of the first projects I've created since graduating from The Iron Yard.
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default About;
