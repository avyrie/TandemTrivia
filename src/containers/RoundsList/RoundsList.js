import React from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import Round from '../../components/Round/Round.js'

function RoundsList() {
    //An object with 10 unique random keys
    function randomArr() {
        let keys = {}
        while (Object.keys(keys).length < 10) {
            let num = Math.floor(Math.random() * (20 - 0) + 0);
            //While length of an object keys < 10, we add a new unique key
            keys[num] = true;
        }
        // Keys of an object is always a string. Iterate and parse integers. Map will save it into an array
        let randNumsArr = Object.keys(keys).map((num) => parseInt(num))
        return randNumsArr
    }
    // randomArr();
    let randArr = randomArr();
    console.log(`Random array: ${randArr}`)

    function shuffle() {
        var currentIndex = randArr.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle
        while (0 !== currentIndex) {

            // Picks a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // Swaps remaining element with the current element.
            temporaryValue = randArr[currentIndex];
            randArr[currentIndex] = randArr[randomIndex];
            randArr[randomIndex] = temporaryValue;
        }
        return randArr;
    }
    let shuffledArr = shuffle();
    // console.log(`shuffle: ${shuffle()}`)
    // console.log(shuffle())


    // TEST to see if the length of the resulting array is 10. uniqueArray removes duplicate items from an array so if the length is 10, no items have been removed and it is truly a randomized, non-repeating array!
    function testUnique(arr) {
        if (arr.length < 10) {
            return "Failure: length is less than 10"
        } else if (arr.length === 10) {
            return "Success: length is 10"
        }
    }
    const uniqueArray = shuffledArr.filter(function(item, pos) {
        return shuffledArr.indexOf(item) === pos;
    });

    console.log(testUnique(uniqueArray))

    console.log(`uniueArr : ${uniqueArray}`)
    console.log(uniqueArray)


    // * Creates an array of 10 random rounds from the data *
    let roundsList = [];
    function createQuestions() {
        for (let j = 0; j < uniqueArray.length; j++) {
            roundsList.push(data[uniqueArray[j]])
        }
        // console.log(JSON.stringify(roundsList))
        return roundsList;
    }
    createQuestions();
    // console.log(`These are the questions: ${JSON.stringify(createQuestions())}`);
    console.log(`These are the questions in roundslist: ${JSON.stringify(roundsList)}`);
    // console.log(`These are the questions in roundslist: ${roundsList}`);
    
    return (
        <Round 
        roundsList={roundsList}
        />
    )
}

export default RoundsList;


