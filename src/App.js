import React, { Component } from 'react';
import './App.css';
import List from './components/List.js';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      filmsSelected: true,
      seasonsSelected: false
    }
  }

  handleFilmsClick () {
    this.setState({
      filmsSelected: true,
      seasonsSelected: false
    })
  }

  handleSeasonsClick () {
    this.setState({
      filmsSelected: false,
      seasonsSelected: true
    })
  }

  renderButtons() {
    return (
      <div>
        <input
         type="button"
         className={this.state.filmsSelected === true ? 'primary' : 'secondary'}
         value= "Films"
         onClick={() => this.handleFilmsClick()}
         key={ 'Films' } />
         <input
          type="button"
          className={this.state.seasonsSelected === true ? 'primary' : 'secondary'}
          value= "TV Seasons"
          onClick={() => this.handleSeasonsClick()}
          key={ 'TV Seasons' } />
      </div>
    )
  }

  render() {
    return (
      <div>
        <header>
          <h1>React coding challenge</h1>
          <h3>Candidate: Lucas Hauptmann Pereira</h3>
        </header>
        {this.renderButtons()}
        <List {...this.state}/>
      </div>
    );
  }
}
