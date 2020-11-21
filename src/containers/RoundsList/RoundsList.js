import React from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import Round from '../../components/Round/Round.js'

function RoundsList() {
    //An object with 10 unique random keys
    function randmArr() {
        let keys = {}
        while (Object.keys(keys).length < 10) {
            let num = Math.floor(Math.random() * (20 - 0) + 0);
            keys[num] = true;
        }
        let randNumsArr = Object.keys(keys).map((num) => parseInt(num))
        let shuffArr = randNumsArr.sort(() => Math.random() - 0.5)
        return shuffArr
    }
    let shuffledArr = randmArr();

    // * Creates an array of 10 random rounds from the data *
    let roundsList = [];
    function createQuestions() {
        for (let j = 0; j < shuffledArr.length; j++) {
            roundsList.push(data[shuffledArr[j]])
        }
        return roundsList;
    }
    createQuestions();
    
    return (
        <Round 
        roundsList={roundsList}
        />
    )
}

export default RoundsList;


