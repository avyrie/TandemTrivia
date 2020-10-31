import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import RoundsList from './containers/RoundsList/RoundsList';
// import Routes from './config/routes';

import data from './data/Apprentice_TandemFor400_Data.json';

// CSS 
import './App.css';

class App extends Component {

  state = {
    // answers: [],
    // data: data,
    // questionList: [],
  };

  // questions(n = 10) => {
  //   Promise.resolve(qBank.sort(() => 0.5 - Math.random().slice(0, n)))
  // }

  
  
  // pageReset = () => {
    //   this.setState({answers: []})
    // }
    
    // onAnswer = (bool) => {
      //   const midAnswers = this.state.answers;
      //   let answer;
      //   if (bool === 'true') {
        //     answer = true;
        //   } else {
          //     answer = false;
          //   }
          //   midAnswers.push(answer);
          //   this.setState({answers: midAnswers})
          // }
          
          // createList = () => {
          //   let questionList = []
          //   for (let i = 0; i < 11; i++) {
          //     questionList.push(data[Math.floor(Math.random() * 10)]);
          //   }
          //   return console.log(data[Math.floor(Math.random() * 10)])
          //   // return console.log(JSON.stringify(questionList))
          // }
  render () {
    // const parsedData = JSON.stringify(data);
    // const newString = JSON.stringify(data[0].question)
    // console.log(`This is the data: ${parsedData}`);
    // console.log(newString);

    // for(let i = 0; i < data.length; i++) {
    //   console.log(data[i].question)
    // }

    return (
      <div className="App">
        <RoundsList />
        {/* <Routes onAnswer={this.onAnswer} answers={this.state.answers}/>  */}
      </div>
    );
  }
}

export default App;
