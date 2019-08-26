import React, { Component } from 'react';
import './app.css';
import Upcomping from './movies'

export default class App extends Component {
  state = { username: null };
  componentDidMount() {

  }

  render() {
    return (
      <Upcomping></Upcomping>
    );
  }
}
//<img src={ReactImage} alt="react" />