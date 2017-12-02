import React, { Component } from 'react';
import '../styles/App.css';

// Components
import OtherChantsCard from '../components/OtherChantsCard.js';

// Material-UI components
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData= [
  {
    img: 'http://lorempixel.com/400/200/food',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/400/200/food',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://lorempixel.com/400/200/food',
    title: 'More Things',
    author: 'jill111',
  },
  {
    img: 'http://lorempixel.com/400/200/food',
    title: 'Other Things!!!',
    author: 'pashminu',
  }
]

class OtherChants extends Component {
  render() {
    return (
      <div className="App">
        <div style={styles.root}>
          <GridList cellHeight={180} style={styles.gridList}>
            <Subheader>December</Subheader>
              {tilesData.map((tile) => (
                <GridTile key={tile.img} title={tile.title} subtitle={<span>by <b>{tile.author}</b></span>} actionIcon={<IconButton><StarBorder color="white" /></IconButton>}><img src={tile.img} />
                </GridTile>
              ))}
          </GridList>
        </div>
      </div>
    )
  }
}

export default OtherChants;
