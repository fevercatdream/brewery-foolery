// bar trivia page
var playBtn = document.querySelector("#play-btn");
var triviaQuestionContainer = document.querySelector(
  "#trivia-question-container"
);
var triviaContentContainer = document.querySelector(
  ".content-container-trivia-q"
);
var triviaDropdownChoice = document.querySelector("#trivia-dropdown-choice");

var triviaQuestion = document.querySelector("#trivia-question");
var triviaPossibleAnswers = document.querySelector("#trivia-possible-answers");
var optAnsA = document.querySelector("#opt-ans-a");
var optAnsB = document.querySelector("#opt-ans-b");
var optAnsC = document.querySelector("#opt-ans-c");
var optAnsD = document.querySelector("#opt-ans-d");
var correctAnswerContainer = document.querySelector(
  "#correct-answer-container"
);
var correctAnswer = document.querySelector("#correct-answer");
var correctAnswerBtn = document.querySelector("#correct-answer-btn");
var nextQuestionBtn = document.querySelector("#next-question-btn");
var btnContainer = document.querySelector("button-container");
//function for fetching trivia questions
// -----
//fetches trivia questions based on user input from selector drop menu
//get appropriate keys and values from return array (question, incorrect answer, correct)
//stores the questions in variable
//fetches answers (all answers, concat the incorrect and correct answers together)
//stores that new array in variable
//fetch correct answer in it's own variable

//these variables are sample variables to test functions

//this function shuffles the answer array index so we get randomzed order of answers
function shuffleAnswers(fullAnswerArray) {
  let currentIndex = fullAnswerArray.length,
    randomIndex;
  console.log(currentIndex);
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    //shuffles current array
    [fullAnswerArray[currentIndex], fullAnswerArray[randomIndex]] = [
      fullAnswerArray[randomIndex],
      fullAnswerArray[currentIndex],
    ];
    //renders the questions to page based on index we shuffled
    optAnsA.innerHTML = "A.) " + fullAnswerArray[3];
    console.log("after-shuffle-1", fullAnswerArray[3]);
    optAnsB.innerHTML = "B.) " + fullAnswerArray[1];
    console.log("after-shuffle-2", fullAnswerArray[1]);
    optAnsC.innerHTML = "C.) " + fullAnswerArray[2];
    console.log("after-shuffle-3", fullAnswerArray[2]);
    optAnsD.innerHTML = "D.) " + fullAnswerArray[0];
    console.log("after-shuffle-4", fullAnswerArray[0]);
  }
}

function fetchTriviaData() {
  var triviaUserInput = triviaDropdownChoice.value;

  var triviaRequestUrl =
    "https://the-trivia-api.com/api/questions?limit=20&categories=" +
    triviaUserInput;
  console.log(triviaRequestUrl);

  fetch(triviaRequestUrl)
    .then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
    })
    .then(function (data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        var correctAnswerProperty = [data[index].correctAnswer];
        var incorrectAnswerProperty = data[index].incorrectAnswers;
        var questionProperty = data[index].question;
        var fullAnswerArray = incorrectAnswerProperty.concat(
          correctAnswerProperty
        );
      }
      triviaQuestion.innerHTML = questionProperty;
      shuffleAnswers(fullAnswerArray);
      correctAnswer.innerHTML = correctAnswerProperty;
    });
}
//merge fix comment
// ------------------event listeners--------------------
//commented out cause they throw errors without ID's being on same page

var showCorrectAnswerBtn = document.querySelector("#correct-answer-btn");
var nextQuestionBtn = document.querySelector("#next-question-btn");
var playTriviaBtn = document.querySelector("#play-btn");

showCorrectAnswerBtn.addEventListener("click", function () {
  console.log("correct answer button is working!");
  correctAnswerContainer.classList.remove("hidden");
  correctAnswerBtn.classList.remove("glow");

  //need to get data out of fetch requests to complete this function
  //add render function for that data here as well
});
nextQuestionBtn.addEventListener("click", function (event) {
  event.preventDefault();
  correctAnswerContainer.classList.add("hidden");
  triviaContentContainer.classList.remove("hidden");
  correctAnswerBtn.classList.add("glow");
  console.log("next question button is working!");
  fetchTriviaData();
  //need to get data out of fetch requests to complete this function
  //add render function for that data here as well
});
playTriviaBtn.addEventListener("click", function (event) {
  event.preventDefault();
  correctAnswerContainer.classList.add("hidden");
  triviaContentContainer.classList.remove("hidden");
  nextQuestionBtn.classList.remove("hidden");
  correctAnswerBtn.classList.remove("hidden");
  correctAnswerBtn.classList.add("glow");
  fetchTriviaData();
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
