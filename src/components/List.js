import React, { Component } from 'react';
import ListItem from './ListItem.js'
import Data from '../data/2_avails_extension.json'

export default class List extends Component {
  renderList() {
    if (this.props.seasonsSelected == true) {
      return (Data.tv_seasons.map((resource) => <ListItem item={resource} key={resource.name}/>));
    } else {
      return (Data.films.map((resource) => <ListItem item={resource} key={resource.name} />));
    }
  }

  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}
