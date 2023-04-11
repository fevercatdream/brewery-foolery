// bar trivia page
var playBtn = document.querySelector("#play-btn");
var triviaQuestionContainer = document.querySelector("#trivia-question-container");
var triviaQuestion = document.querySelector("#trivia-question");
var triviaPossibleAnswers = document.querySelector("#trivia-possible-answers");
var optAnsA = document.querySelector("#opt-ans-a");
var optAnsB = document.querySelector("#opt-ans-b");
var optAnsC = document.querySelector("#opt-ans-c");
var optAnsD = document.querySelector("#opt-ans-d");
var correctAnswerContainer = document.querySelector("#correct-answer-container");
var correctAnswer = document.querySelector("#correct-answer");
var correctAnswerBtn = document.querySelector("#correct-answer-btn");
var nextQuestionBtn = document.querySelector("#next-question-btn");

//function for fetching trivia questions
// -----
//fetches trivia questions based on user input from selector drop menu
//get appropriate keys and values from return array (question, incorrect answer, correct)
//stores the questions in variable
//fetches answers (all answers, concat the incorrect and correct answers together)
//stores that new array in variable
//fetch correct answer in it's own variable

//these variables are sample variables to test functions
triviaUserInput = "arts&literature";
var userInputLowercase = triviaUserInput.toLocaleLowerCase();
console.log(userInputLowercase);

var triviaRequestUrl =
  "https://the-trivia-api.com/api/questions?limit=20&categories=" +
  userInputLowercase;
console.log(triviaRequestUrl);

function fetchTriviaData() {
  fetch(triviaRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        var correctAnswerProperty = data[index].correctAnswer;
        var incorrectAnswerProperty = data[index].incorrectAnswers;
        var questionProperty = data[index].question;
        console.log(questionProperty);
        console.log(correctAnswerProperty);
        console.log(incorrectAnswerProperty);
        //have correct properties located and selected, just need to get them out of function, or create/append from within this function
      }
    });
}

// ------------------event listeners--------------------
//commented out cause they throw errors without ID's being on same page

var showCorrectAnswerBtn = document.querySelector("#correct-answer-btn");
var nextQuestionBtn = document.querySelector("#next-question-btn");
var playTriviaBtn = document.querySelector("#play-btn");

showCorrectAnswerBtn.addEventListener("click", function () {
  console.log("correct answer button is working!");
  //need to get data out of fetch requests to complete this function
  //add render function for that data here as well
});
nextQuestionBtn.addEventListener("click", function () {
  console.log("next question button is working!");
  //need to get data out of fetch requests to complete this function
  //add render function for that data here as well
});
playTriviaBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("play button is working!");
  //need to get data out of fetch requests to complete this function
  //add render function for that data here as well
});

//function for getting value of dropdown menu selection out of dropdown menu
// -------
// use this variable to help var triviaCriteriaMenuValue = selectElement.options[selectElement.selectedIndex].value
//function for rendering the question/answers to page
// ------
//grab the variables from trivia fetch function
//add event handler on 2 buttons: one button renders question and concatted answer array
//other button renders correct answer below it and adds a subtle animation to click first button to generate new question
//