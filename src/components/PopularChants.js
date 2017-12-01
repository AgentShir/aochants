import React, { Component } from 'react';

// Styles
import '../styles/App.css';

// Components
import MobileTearSheet from '../components/MobileTearSheet.js';

// Material-UI Components
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import Divider from 'material-ui/Divider';
// import ActionInfo from 'material-ui/svg-icons/action/info';


class PopularChants extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <MobileTearSheet>
            <List>
              <ListItem primaryText="We Love Ya" leftIcon={<ContentInbox />} />
              <ListItem primaryText="I Believe That We Will Win" leftIcon={<ActionGrade />} />
              <ListItem primaryText="US 'Til I Die'" leftIcon={<ContentSend />} />
              <ListItem primaryText="You're Not Singing Anymore (Or Overthere)" leftIcon={<ContentDrafts />} />
              <ListItem primaryText="Everywhere We Go" leftIcon={<ContentInbox />} />
            </List>
          </MobileTearSheet>
        </div>
      </div>
    );
  }
}

export default PopularChants;
