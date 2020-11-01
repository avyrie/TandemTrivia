import React from 'react';
import { Link } from 'react-router-dom';

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
        <div>
            <h1>This is the results page</h1>
            <h3>You got {percentage}% of the questions right!</h3>
            <Link to="/">
                <button>Play Again</button>
            </Link>
        </div>
    )
}

export default Results;


