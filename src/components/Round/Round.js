import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS 
import './Round.css';

class Round extends Component {
    state = {
        roundsList: this.props.roundsList,
        answers: [],
        index: 0,
        tally: [],
        questionNumber: 1,
    }

    // * Create an answers array with both wrong and right answers *
    answersArr = (wrong, right) => {
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
     
        if (answers.length < 4) {
            let emptyAns = document.getElementById("button3");
            emptyAns.setAttribute("class", "empty")
        }
        return answers;
    }
    
    onAnswer = (e) => {
        // variable holding the list of 10 random rounds
        let roundsList = this.state.roundsList;
        // variable holding the current round 
        let currentRound = roundsList[this.state.index];
        let currentIncorrects = currentRound.incorrect;
        let currentCorrect = JSON.stringify(currentRound.correct);
       
        // If you click a choice and it is wrong, function will add false to an array and vice versa 
        let tally = this.state.tally;
        let allBtns = document.querySelectorAll("button");
       
        // console.log(allBtns[1].innerHTML)

        function correctBtn() {
            for (let i = 0; i < 6; i++) {
                if (allBtns[i].innerHTML == currentCorrect) {
                    let correctButt = allBtns[i];
                    return correctButt
                }
            }
        }
        let correctAns = correctBtn();
        // let correctAns = correctBtn().innerHTML;
        console.log(correctAns)
        
        if (e.target.innerHTML == currentCorrect) {
            tally.push(true);
            e.target.setAttribute("class", "true")
            // e.target.className += "true"
        } else {
            tally.push(false);
            e.target.setAttribute("class", "false");
            correctAns.style.border = '2px solid green';
            // e.target.className += "false"
        }

        
        // * Disables all the answer button so another selection cannot be made *
        let buttons = document.querySelectorAll("#button");
        buttons.forEach(function(button) {
            button.disabled = true;
        })
        let emptyAns = document.getElementById("button3");
        emptyAns.disabled = true;
        console.log(`Tally: ${tally}`)
        // return tally;
        console.log(`Tally length: ${tally.length}`)
        let nextBtn = document.getElementById("next");
        nextBtn.removeAttribute("class", "next-btn")

        if (tally.length > 9) {
            let endGame = document.querySelector("#endgame");
            endGame.setAttribute("class", "showResults")
            let next = document.querySelector("#next");
            next.setAttribute("class", "endgame")
        } 
    }

    // * Increases the index in state by 1. On click, this will update the current round to a new round *
    nextQuestion = () => {
        let tally = this.state.tally;
        let roundsList = this.state.roundsList;
        if (tally.length > 9) {
            let endGame = document.querySelector("#endgame");
            endGame.setAttribute("class", "showResults")
        } else {
            this.setState({ index: (this.state.index +1) % roundsList.length});
            let buttons = document.querySelectorAll("#button");
            
            // * Enables the buttons to be selected again  and removes class responsible for color *
            buttons.forEach(function(button) {
                button.setAttribute("class", "no")
                button.disabled = false;
                button.style.border = "2px solid lightgrey"
            })
            this.setState({ answers: [] })
            let emptyAns = document.getElementById("button3");
            let nextBtn = document.getElementById("next");
            nextBtn.setAttribute("class", "endgame")
            emptyAns.setAttribute("class", "no")
            emptyAns.disabled = false;
            emptyAns.style.border = "2px solid lightgrey"
        }
        let questionNum = this.state.questionNumber + 1;
        this.setState({ questionNumber: questionNum })
        console.log(`Tally: ${tally}`)
    };

    render() {
        // variable holding the list of 10 random rounds
        let roundsList = this.state.roundsList;
        // variable holding the current round 
        let currentRound = roundsList[this.state.index];
        // variable holding the incorrect answers 
        let currentIncorrects = currentRound.incorrect;
        // variable holding the correct answer converted to a string 
        let currentCorrect = JSON.stringify(currentRound.correct);
        // variable holding the current question converted to a string 
        let currentQuestion = JSON.stringify(currentRound.question);
        // variable holding the array of incorrect and correct answers 
        let answers = this.answersArr(currentIncorrects, currentCorrect)

        // tests whether there are multiple items in the answers array, if answers is an array, and that the current question is loading
        if (answers.length > 3 && Array.isArray(answers) && currentQuestion) {
            console.log(`Round: Success!`);
        } else {
            console.log(`Round: Failure!`);
        }
        
        return (
            <div className="round-cont startpage">
                <div className="top-span"></div>
                <div className="bottom-span"></div>
                <div className="round-wrap">

                    <div className="question-cont">
                        <h3 className="question">Question <span id="question-num">{this.state.questionNumber}</span>: </h3>
                        <p className="current-question">{currentQuestion}</p>
                    </div>

                    <ul className="round-choices">
                        <li><button id="button" onClick={this.onAnswer}>{answers[0]}</button></li>
                        <li><button id="button" onClick={this.onAnswer}>{answers[1]}</button></li>
                        <li><button id="button" onClick={this.onAnswer}>{answers[2]}</button></li>
                        <li><button id="button3" onClick={this.onAnswer}>{answers[3]}</button></li>
                    </ul>
                    
                    <button className="next-btn" id="next" onClick={this.nextQuestion}>Next Question</button>

                    <Link to={{
                        pathname: '/results',
                        aboutProps: {
                            name: 'Info was clicked from results',
                            tally: this.state.tally
                        }
                    }}> 
                        <button id="endgame" className="endgame">See Results</button>
                    </Link>

                </div>
            </div>
        )
    }
};

export default Round;