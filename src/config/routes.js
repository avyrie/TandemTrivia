// import React from 'react';
// import { Switch, Route, Router } from 'react-router-dom';
// import Home from '../containers/Home'
// import QuestionContainer from '../containers/RoundsList/RoundsList'
// import Results from '../containers/Results'


// function Routes(props) {
//     const { onAnswer, answers } = props;

//     return(
//         <Router>
//             <Switch>
//                 <Route exact path='/' component={Home} />
//                 <Route 
//                     exact path='/questions' 
//                     render={(props) => <QuestionContainer {...props} onAnswer={onAnswer} answers={answers} />} />
//                 <Route 
//                     exact path='/results' 
//                     render={(props) => <Results {...props} answers={answers} />} />
//             </Switch>
//         </Router>
//     )
// }

// export default Routes;