import React from 'react';
import { Link } from 'react-router-dom';
import Circle from '../../images/circle-sketch.png'
import './Results.css';


function Results(props) {
    console.log(`Result Props: ${JSON.stringify(props.location.aboutProps)}`)
    let unStringTally = props.location.aboutProps.tally;
    let tally = JSON.stringify(props.location.aboutProps.tally);
    let results = [];

    for (let i = 0; i < unStringTally.length; i++) {
        if ( unStringTally[i] == true) {
            results.push(unStringTally[i])
        }
    }
    console.log(`results array of trues: ${results}`)
    // console.log(`tally ${unStringTally[0]}`)
    let percentage = (results.length/unStringTally.length) * 100;
    console.log(percentage)

    return (
        <div className="startpage">
            <div className="uppercircle"></div>
            <div className="lowercircle"><img src={Circle}/></div>
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


