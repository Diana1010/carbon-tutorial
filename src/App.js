import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import { Button } from 'carbon-components-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          Hello Carbon! Well, not quite yet. This is the starting point for the
          Carbon tutorial.
        </div>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
