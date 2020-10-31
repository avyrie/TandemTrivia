import React, { Component } from 'react';
import RoundsList from './containers/RoundsList/RoundsList';
// import Routes from './config/routes';

// CSS 
import './App.css';

class App extends Component {

  state = {
 
  };

  
  render () {

    return (
      <div className="App">
        <RoundsList />
      </div>
    );
  }
}

export default App;
