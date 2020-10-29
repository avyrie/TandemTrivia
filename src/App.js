import { Component } from 'react';
import RoundsList from './containers/RoundsList/RoundsList';
import Routes from './config/routes';

// CSS 
import './App.css';

class App extends Component {

  state = {
    answers: [],
  };

  // pageReset = () => {
  //   this.setState({answers: []})
  // }

  onAnswer = (bool) => {
    const midAnswers = this.state.answers;
    let answer;
    if (bool === 'true') {
      answer = true;
    } else {
      answer = false;
    }
    midAnswers.push(answer);
    this.setState({answers: midAnswers})
  }

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
