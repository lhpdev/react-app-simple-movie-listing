import React, { Component } from 'react';

export default class ListItem extends Component {
  renderEpisodesCount(){
    if (this.props.item.episodes != undefined) {
      const episodes = this.props.item.episodes.map((episode) => episode)
      return (
        <dl><strong>Number of episodes:</strong> {episodes.length} </dl>
      );
    }
  }

  render() {
    return (
      <li key={this.props.item.name}>
        <dt>
          <dl><strong>Name:</strong> {this.props.item.name}</dl>
          <dl><strong>Description:</strong> {this.props.item.description}</dl>
          {this.renderEpisodesCount()}
          <dl><strong>Price (buy):</strong> {this.props.item.prices.buy}</dl>
          <dl><strong>Price (rent):</strong> {this.props.item.prices.rent}</dl>
        </dt>
      </li>
    );
  }
}
