import React, { Component } from 'react';
import Jumbotron from './jumbotron';
import Layout from './layout';

class App extends Component {
  render() {
    return (
      <div className="App text-center center">
        <Jumbotron />
        <Layout />
      </div>
    );
  }
}

export default App;
