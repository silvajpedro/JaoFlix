import React, { Component } from 'react';
import Header from './Components/Header.js';

export default class App extends Component {

  render() {
    document.body.style.backgroundColor = "#2B2E43"
    return (
      <div>
        <Header />
      </div>
    )
  }
}
