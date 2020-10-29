import React from 'react';
import data from '../../data/Apprentice_TandemFor400_Data.json';
import Round from '../../components/Round/Round.js'

function RoundsList(props) {
    const theData = JSON.stringify(data);
    
    return (
        <Round 
        data={data}
        />
    )
}

export default RoundsList;


