import React from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import Round from '../../components/Round/Round.js'

function RoundsList(props) {
    // const theData = JSON.stringify(data);

    // * Creates an array of random numbers between 5 and 21 *
    let questions = [];
    function createList () {
        for(let i = 0 ; i < 10; i++) {
            
            let number = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
            questions.push(number)
        }
        // console.log(questions);
        return questions;
    }
    createList()

    // * Removes number from array if that number repeats *
    const numArray = questions.filter(function(num, index) {
        return questions.indexOf(num) == index;
    });

    // * If the array is less than 10, this function will add a number 1 - 5 until the array legnth is 10
    function fillArr() {
        let fillers = [1, 2, 3, 4, 5];
        for (let h = 0; h < numArray.length; h++){
            if(numArray.length != 10) {
            numArray.push(fillers[h]);
            // console.log(`This is the unique array ${numArray} with a length of ${numArray.length}`);
            } else {
                // console.log(`This is the unique array ${numArray} with a length of ${numArray.length}`);
                return numArray;
            }
        }
    }
    fillArr();

    // * Creates an array of 10 random rounds from the data *
    let roundsList = [];
    function createQuestions() {
        for (let j = 0; j < numArray.length; j++) {
            roundsList.push(data[numArray[j]])
        }
        // console.log(JSON.stringify(roundsList))
        return roundsList;
    }
    createQuestions();
    
    return (
        <Round 
        data={data} roundsList={roundsList}
        />
    )
}

export default RoundsList;


