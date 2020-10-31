import React, { Component } from 'react';
import './Round.css';

class Round extends Component {
    state = {
        roundsList: this.props.roundsList,
        questions: [],
        answers: [],
        index: 0,
    }

    // Increases the index in state by 1. On click, this will update the current round to a new round
    nextQuestion = () => {
        this.setState({ index: (this.state.index +1) % this.state.roundsList.length});
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
            console.log(`Answers array ${answers}`)
        }
            
        answersArr(currentIncorrects, currentCorrect);
        


        // If you click a choice and it is wrong, function will add false to an array and vice versa ----
        let tally = [];
        function onAnswer(e) {
            if (e.target.innerHTML == answers[3]) {
                tally.push(true)
            } else {
                tally.push(false)
            }
            // console.log(`Tally: ${tally}`)
            // console.log(e.target)
        }

       
        


        // for(let i = 0; i < data.length; i++) {
        //     incorrectAnswers[i].forEach((j) => {
        //         answers.push(j)
        //     })
        //     // console.log(answers)
        //     answers.push(correctAnswers[i])
        //     console.log(answers)
        // }

        // return parsedQuestion;
        // console.log(parsedQuestion)

        // console.log(`Props in Round: ${parsedData}`)
        // Object.entries(data).map(([question, incorrect, correct]) => {
        //     const parsedQuestion = JSON.stringify(question)
        //     console.log(`Question: ${parsedQuestion}`)
        //     console.log(`Incorrect: ${incorrect}`)
        //     console.log(`Correct: ${correct}`)
        // })

        

        return (
            <div className="round-cont">
                <div className="round-wrap">
                    <h3>Question: </h3>
                    <p>{currentQuestion}</p>
                    <ul className="round-choices">
                        <li><button id="choices1" onClick={onAnswer}>{answers[0]}</button></li>
                        <li><button className="choices" onClick={onAnswer}>{answers[1]}</button></li>
                        <li><button className="choices" onClick={onAnswer}>{answers[2]}</button></li>
                        <li><button className="choices" onClick={onAnswer}>{answers[3]}</button></li>
                    </ul>
                    <button className="next-btn" onClick={this.nextQuestion}>Next</button>
                    {/* <button className="test" onClick={fillArray}>Fill</button> */}
                </div>
            </div>
        )
    }
};

export default Round;