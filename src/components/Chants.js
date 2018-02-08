import React, { Component } from 'react';

// Styles
import '../styles/App.css';

// Components
import MobileTearSheet from '../components/MobileTearSheet.js';

// Material-UI Components
import {List, ListItem} from 'material-ui/List';
// import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
// import ContentSend from 'material-ui/svg-icons/content/send';
// import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import Divider from 'material-ui/Divider';
// import ActionInfo from 'material-ui/svg-icons/action/info';
import {red900, indigo900} from 'material-ui/styles/colors';

class PopularChants extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <MobileTearSheet>
            <List>
              <ListItem primaryText="We Love Ya" leftIcon={<ActionGrade color={red900} />} />
              <ListItem primaryText="I Believe That We Will Win" leftIcon={<ActionGrade color={indigo900} />} />
              <ListItem primaryText="US 'Til I Die" leftIcon={<ActionGrade color={red900} />} />
              <ListItem primaryText="You're Not Singing Anymore/Over There" leftIcon={<ActionGrade color={indigo900} />} />
              <ListItem primaryText="Everywhere We Go" leftIcon={<ActionGrade color={red900} />} />
            </List>
          </MobileTearSheet>
        </div>
      </div>
    );
  }
}

export default PopularChants;
