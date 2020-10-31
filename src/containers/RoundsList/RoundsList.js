import React from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import Round from '../../components/Round/Round.js'

function RoundsList(props) {
    const theData = JSON.stringify(data);

    // Creates an array of random, non-repeating numbers
    let questions = [];
    function createList () {
        for(let i = 0 ; i < 10; i++) {
            
            let number = Math.floor(Math.random() * (21 - 5 + 1)) + 5;
            questions.push(number)
        }
        // console.log(questions);
        return questions;
    }

    createList()

    const uniqueArray = questions.filter(function(item, pos) {
        return questions.indexOf(item) == pos;
    }
    )

    function fillArr() {
        let fillers = [1, 2, 3, 4, 5];
        for (let h = 0; h < uniqueArray.length; h++){
            if(uniqueArray.length != 10) {
            uniqueArray.push(fillers[h]);
            // console.log(`This is the unique array ${uniqueArray} with a length of ${uniqueArray.length}`);
            } else {
                console.log(`This is the unique array ${uniqueArray} with a length of ${uniqueArray.length}`);
                return uniqueArray;
            }
        }
    }
    fillArr()
    
    return (
        <Round 
        data={data}
        />
    )
}

export default RoundsList;


