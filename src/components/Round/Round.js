import React, { Component } from 'react';
import './Round.css';

class Round extends Component {
    state = {
        answers: [],
    }

    
    render() {
        
        let tally = [];
        const data = this.props.data;
        // console.log(data)
        const parsedData = JSON.stringify(data);
        const parsedQuestion = JSON.stringify(data[0].question);


        for(let i = 0; i < data.length; i++) {
            const parsedQuestions = JSON.stringify(data[i].question);
            console.log(parsedQuestions)
        }

        data.forEach((question) => {
            // console.log(`forEach question: ${question.question}`)
        })
        

        const questions = data.map(question  => {
            return question.question;
        })
        // console.log(JSON.stringify(questions[0]))
        
        const correctAnswers = data.map(correct => {
            return correct.correct;
        })
        // console.log(JSON.stringify(correctAnswers[0]))

        const incorrectAnswers = data.map(incorrect => {
            return incorrect.incorrect;
        })
        // console.log(JSON.stringify(incorrectAnswers[0]))

        let answersString = JSON.stringify(this.state.answers);
        let answers = this.state.answers;
        console.log(`This.state.answers: ${answersString}`)


        // Create a questions array with both wrong and right answers ----
        function fillArray(wrong, right) {
            wrong.forEach((j) => {
            answers.push(j)
        });
            answers.push(right)
            console.log(`Answers array from state ${answers}`)
        }
        // console.log(answers)*

        fillArray(incorrectAnswers[0], correctAnswers[0])


        // If you click a choice and it is wrong, function will add false to an array and vice versa ----
        function onAnswer(e) {
            if (e.target.innerHTML == answers[3]) {
                tally.push(true)
            } else {
                tally.push(false)
            }
            console.log(`Tally: ${tally}`)
            console.log(e.target)
        }

        // *** not working
        let pageReset = () => {
            this.setState({answers: []})
            let newState = JSON.stringify(this.state);
            console.log(`New state ${newState}`);
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
                    <p>{parsedQuestion}</p>
                    <ul className="round-choices">
                        <li><button id="choices1" onClick={onAnswer}>{answers[0]}</button></li>
                        <li><button className="choices" onClick={onAnswer}>{answers[1]}</button></li>
                        <li><button className="choices" onClick={onAnswer}>{answers[2]}</button></li>
                        <li><button className="choices" onClick={onAnswer}>{answers[3]}</button></li>
                    </ul>
                    <button className="next-btn" onClick={pageReset}>Next</button>
                </div>
            </div>
        )
    }
};

export default Round;