# Tandem Trivia Quiz App

This app was created as an application submission for Tandem's Apprenticeship Program.

The prompt for this challenge was to create a trivia app that displays trivia questions with multiple-choice answers to select from. The requirements are that the player can view the question(s), the answer choices, the correct answer upon submission, and their score. A round of trivia has 10 questions, all questions are multiple-choice, trivia data such as the questions, correct and incorrect answers are provided via a JSON file, questions with their multiple choice options must be displayed one at a time, questions should not repeat in a round, a user can select only 1 answer out of the 4 possible answers, the correct answer must be revealed after a user has submitted their answer and a user can see the score they received at the end of the round.

I specifically chose a color scheme that compliments what is shown on Tandem's website.

The game title and Tandem logo are also links to Tandem's website.

To begin, click/press the "Start Game" button.

The user is greeted with a random question and four answers presented in a random order. Clicking on an answer will reveal the "Next Question" button.

With each press of the "Next Question" button, the question number will increase by one and the user will be presented with a new, non-repeating, random question.

Once the user has answered ten questions, the "Next Question" button will disappear to be replaced with a "See Results" button.

Clicking the "See Results" button will take the user to the results page where they can view the percentage of questions they got right as well as a button that will allow the user to play the game again.

## Instillations
- npx create-react-app app-name
- npm i
- npm i react-router-dom

* The command to run this code is npm start

### Font Awesome
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">

### Google Fonts  
<link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;400;900&display=swap" rel="stylesheet">

### Bootstrap
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<script defer src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script> 

## Icons
Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

Icons made by <a href="https://www.flaticon.com/free-icon/faq_788893?term=color%20question&page=1&position=10" title="Prosymbols">Prosymbols</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

## Technologies Used
- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap

### Deployed with netlify - https://ecstatic-beaver-43605f.netlify.app/
[![Netlify Status](https://api.netlify.com/api/v1/badges/599a1a6f-33e1-4e5b-b461-cffdae63c709/deploy-status)](https://app.netlify.com/sites/ecstatic-beaver-43605f/deploys)

## Future Iterations
- high score board
- option to challenge your friends
- option to create your own trivia game
