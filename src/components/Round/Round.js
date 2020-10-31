import React, { Component } from 'react';
import './Round.css';

class Round extends Component {
    state = {
        roundsList: this.props.roundsList,
        questions: [],
        answers: [],
        index: 0,
        clicked: false,
        disabled: false,
    }

    // Increases the index in state by 1. On click, this will update the current round to a new round
    nextQuestion = () => {
        this.setState({ index: (this.state.index +1) % this.state.roundsList.length});
        let buttons = document.querySelectorAll("#button");
        for(let i = 0; i < 4; i++) {
            buttons.disabled = false;
            this.setState({ clicked: true });
            this.setState({ disabled: false })
        }
        console.log(`Buttons ${buttons}`)
    };
    
    render() {
        // variable holding the list of 10 random rounds
        let roundsList = this.state.roundsList;
        console.log(roundsList);
        // variable holding the current round 
        let currentRound = roundsList[this.state.index];
        let currentQuestion = JSON.stringify(currentRound.question);
        let currentIncorrects = currentRound.incorrect;
        let currentCorrect = JSON.stringify(currentRound.correct);
        
        
        
        // Create an answers array with both wrong and right answers ----
        let answers = [];
        function answersArr(wrong, right) {
            for(let i = 0; i < wrong.length; i++) {
                answers.push(JSON.stringify(wrong[i]))
            }
            answers.push(right)
            // console.log(`Answers array ${answers}`)
        }
        answersArr(currentIncorrects, currentCorrect);
        console.log(`Answers array ${answers}`)

        // Randomizes answers array
        function shuffle(array) {
            let currentIndex = array.length, tempVal, randomIndex;
            while (0 != currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                tempVal = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = tempVal;
            }
            return array;
        };
        let shuffledAnswers = shuffle(answers)
        console.log(shuffledAnswers);


        // If you click a choice and it is wrong, function will add false to an array and vice versa 
        let tally = [];
        tally.length = 4;
        function onAnswer(e) {
            if (e.target.innerHTML == currentCorrect) {
                tally.shift(true);
                e.target.className += "true"
                setState({disabled: true})

            } else {
                tally.shift(false);
                e.target.className += "false"
                setState({disabled: true})
            }
            console.log(`Tally: ${tally.length}`)
            e.target.disabled = this.state.disabled;
            console.log(`e.target ${e.target}`)

            return tally;
        }
        let className = this.state.clicked ? 'click-state' : 'base-state';
        
        return (
            <div className="round-cont">
                <div className="round-wrap">
                    <h3>Question: </h3>
                    <p>{currentQuestion}</p>
                    <ul className="round-choices">
                        <li><button id="button" className={className} onClick={onAnswer}>{answers[0]}</button></li>
                        <li><button id="button" className={className} onClick={onAnswer}>{answers[1]}</button></li>
                        <li><button id="button" className={className} onClick={onAnswer}>{answers[2]}</button></li>
                        <li><button id="button" className={className} onClick={onAnswer}>{answers[3]}</button></li>
                    </ul>
                    <button className="next-btn" onClick={this.nextQuestion}>Next</button>
                    {/* <button className="test" onClick={fillArray}>Fill</button> */}
                </div>
            </div>
        )
    }
};

export default Round;