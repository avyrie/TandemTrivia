import React, { Component } from 'react';
// import StartPage from './components/StartPage/StartPage';
import Routes from './config/routes';
// CSS 
import './App.css';

class App extends Component {

  state = {
  };

  render () {

    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
