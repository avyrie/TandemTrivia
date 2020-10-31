import React, { Component } from 'react';
import './Round.css';

class Round extends Component {
    state = {
        roundsList: this.props.roundsList,
        questions: [],
        answers: [],
        index: 0,
        tally: [],
    }

    // * Increases the index in state by 1. On click, this will update the current round to a new round *
    nextQuestion = () => {
        this.setState({ index: (this.state.index +1) % this.state.roundsList.length});
        let buttons = document.querySelectorAll("#button");
        
        // * Enables the buttons to be selected again  and removes class responsible for color *
        buttons.forEach(function(button) {
            button.setAttribute("class", ".no")
            button.disabled = false;
        })
        this.setState({ answers: [] })
    };


    answersArr = (wrong, right) => {
        // Create an answers array with both wrong and right answers ----
        let answers = this.state.answers;
        for(let i = 0; i < wrong.length; i++) {
            answers.push(JSON.stringify(wrong[i]))
        }
        answers.push(right)
        console.log(`Answers array ${answers}`)

        // Randomizes answers array
        function shuffle (array) {
            let currentIndex = array.length, tempVal, randomIndex;
            while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
        
                    tempVal = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = tempVal;
                }
            return array;
        };
        answers = shuffle(answers);
        console.log(`ANSWERS SHUF ${answers}`)
        return answers;
    }
    

    onAnswer = (e) => {
        // variable holding the list of 10 random rounds
        let roundsList = this.state.roundsList;
        // variable holding the current round 
        let currentRound = roundsList[this.state.index];
        let currentCorrect = JSON.stringify(currentRound.correct);
       
        // If you click a choice and it is wrong, function will add false to an array and vice versa 
        // let tally = [];
        
        if (e.target.innerHTML == currentCorrect) {
            this.state.tally.push(true);
            e.target.setAttribute("class", "true")
            // e.target.className += "true"
        } else {
            this.state.tally.push(false);
            e.target.setAttribute("class", "false")
            // e.target.className += "false"
        }
     
        // * Disables all the answer button so another selection cannot be made *
        let buttons = document.querySelectorAll("#button");
        buttons.forEach(function(button) {
            button.disabled = true;
        })
        
        console.log(`Tally: ${this.state.tally}`)
        // return tally;
        
    }
    
    render() {
        // variable holding the list of 10 random rounds
        let roundsList = this.state.roundsList;
        console.log(`Rounds List: ${JSON.stringify(roundsList)}`);
        // variable holding the current round 
        let currentRound = roundsList[this.state.index];
        let currentIncorrects = currentRound.incorrect;
        let currentCorrect = JSON.stringify(currentRound.correct);
        let currentQuestion = JSON.stringify(currentRound.question);
        let answers = this.answersArr(currentIncorrects, currentCorrect)

        
        // let answers = this.shuffle(nonShuf);
        
        return (
            <div className="round-cont">
                <div className="round-wrap">
                    <h3>Question: </h3>
                    <p>{currentQuestion}</p>
                    <ul className="round-choices">
                        <li><button id="button" onClick={this.onAnswer}>{answers[0]}</button></li>
                        <li><button id="button" onClick={this.onAnswer}>{answers[1]}</button></li>
                        <li><button id="button" onClick={this.onAnswer}>{answers[2]}</button></li>
                        <li><button id="button" onClick={this.onAnswer}>{answers[3]}</button></li>
                    </ul>
                    <button className="next-btn" onClick={this.nextQuestion}>Next</button>
                    {/* <button className="test" onClick={fillArray}>Fill</button> */}
                </div>
            </div>
        )
    }
};

export default Round;