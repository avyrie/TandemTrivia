import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import StartPage from '../components/StartPage/StartPage'
import RoundsList from '../containers/RoundsList/RoundsList'
import Results from '../components/Results/Results'


function Routes() {

    return(
        <Router>
            <Switch>
                <Route exact path='/questions' component={RoundsList} />
                <Route exact path='/results' component={Results} />
                <Route exact path='/' component={StartPage} />
            </Switch>
        </Router>
    )
}

export default Routes;