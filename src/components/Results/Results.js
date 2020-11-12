import React from 'react';
import { Link } from 'react-router-dom';
import Circle from '../../images/circle-sketch.png'
import './Results.css';


function Results(props) {
    let unStringTally = props.history.location.aboutProps.tally;
    console.log(`Props from results: ${JSON.stringify(props)}`);
    console.log(`tally from results: ${unStringTally}`);
    let results = [];

    // Creates an array of true answers
    for (let i = 0; i < unStringTally.length; i++) {
        if ( unStringTally[i] == true) {
            results.push(unStringTally[i])
        }
    }

    let percentage = (results.length/unStringTally.length) * 100;
    // Test to make sure the results returned as an array, that the percentage of true answers is a number, and that the total number of answers is equal to 10
    if(Array.isArray(results) && unStringTally.length === 10 && typeof percentage == "number") {
        console.log(`Results: Success!`);
    } else {
        console.log(`Results: Failure`);
    };

    return (
        <div className="startpage">
            <div className="uppercircle"></div>
            <div className="lowercircle"><img alt='' src={Circle}/></div>
            <div id="results">
                <h3>You got </h3>
                <h4>{percentage}%</h4> 
                <h3>of the questions right!</h3>
            </div>
            <Link to="/">
                <button id="play-again">Play Again</button>
            </Link>
        </div>
    )
}

export default Results;


