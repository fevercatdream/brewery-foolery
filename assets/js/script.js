// var modalEl = document.querySelector(".modal");
// var modalCloseBtn = document.querySelector("#modal-close");
// var cardEls = document.querySelectorAll(".card");

// for (var i = 0; i < cardEls.length; i++) {
//   var cardEl = cardEls[i];
//   cardEl.addEventListener("click", openModal);
// }

// modalCloseBtn.addEventListener("click", closeModal);

// function openModal() {
//   modalEl.classList.add("is-active");
// }

// function closeModal() {
//   modalEl.classList.remove("is-active");
// }
//
//
//function?(start ith just getting the fetch command and changing it for each criteria) for querying brewery API
// ----
//needs to fetch from 3 different criteria (for loop?)
//fetch function for state
//fetch function for city
//fetch function for zip code

//these variables are sample user input data to test the functions-->
var stateUserInput = "washington";
var stateUserInputReplaceSpaces = stateUserInput.replace(/ /g, "_");
var cityUserInput = "seattle";
var cityUserInputReplaceSpaces = cityUserInput.replace(/ /g, "_");
var zipcodeUserInput = "98022";

//these variables allow us to change the url input into our fetch commands to filter based on which criteria user inputted
var stateRequestUrl =
  "https://api.openbrewerydb.org/v1/breweries?by_state=" +
  stateUserInputReplaceSpaces;
console.log("staterequesturl", stateRequestUrl);
var cityRequestUrl =
  "https://api.openbrewerydb.org/v1/breweries?by_city=" +
  cityUserInputReplaceSpaces;
console.log("cityrequesturl", cityRequestUrl);
var zipcodeRequestUrl =
  "https://api.openbrewerydb.org/v1/breweries?by_postal=" + zipcodeUserInput;
console.log("zipcoderequesturl", zipcodeRequestUrl);

// function that takes user input and fetches data based on state search criteria
function fetchStateData() {
  fetch(stateRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].name);
        console.log(data[index].state);
        console.log(data[index].address_1);
        console.log(data[index].phone);
        console.log(data[index].city);
        console.log(data[index].brewery_type);
        console.log(data[index].website_url);
        //have correct properties located and selected, just need to get them out of function, or create/append from within this function
      }
    });
}
// function that takes user input and fetches data based on city search criteria
function fetchCityData() {
  fetch(cityRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].name);
        console.log(data[index].state);
        console.log(data[index].address_1);
        console.log(data[index].phone);
        console.log(data[index].city);
        console.log(data[index].brewery_type);
        console.log(data[index].website_url);
        //have correct properties located and selected, just need to get them out of function, or create/append from within this function
      }
    });
}

// function that takes user input and fetches data based on zipcode search criteria
function fetchZipCodeData() {
  fetch(zipcodeRequestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        console.log(data[index].name);
        console.log(data[index].state);
        console.log(data[index].address_1);
        console.log(data[index].phone);
        console.log(data[index].city);
        console.log(data[index].brewery_type);
        console.log(data[index].website_url);
        //have correct properties located and selected, just need to get them out of function, or create/append from within this function
      }
    });
}

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

//-------tasks still needed to be completed------------:

//define variables for each element being modified
//
//
//
//function for rendering the search criteria
// -----
//needs to get out of array
//create and append a card for each search result based on an index and where values are in that array
//name
//physical address
//
//
//
//function for iterating each search result and rendering it to page
// -----
//create for loop for getting each object out of the array
//modify element in card header/body
//add event handler for prompting modal
//needs to sort the results somehow
//
//
//
// render on modal other info
// -----
//city
//state
//website url
//phone number
//type of brewery
//map?**
//
//
//
//create map for modal
//----
//explore google maps api for how to embed
//get lat/long keys and values from fetch return objects
//input into map javascript function
//https://developers.google.com/maps here's a helpful URL
//
//
//function for modifying modal text and rendering it
// ------
// needs to access fetched array
// needs to index that array for correct info
// needs to modify elements in modal to display text of selected values
// ****bonus - have an event listener on a button that targets the next
//
//
//
//function for getting value of dropdown menu selection out of dropdown menu
// -------
// use this variable to help var triviaCriteriaMenuValue = selectElement.options[selectElement.selectedIndex].value
//
//
//
//function for rendering the question/answers to page
// ------
//grab the variables from trivia fetch function
//add event handler on 2 buttons: one button renders question and concatted answer array
//other button renders correct answer below it and adds a subtle animation to click first button to generate new question
//
//
//

// ------------------event listeners--------------------
//commented out cause they throw errors without ID's being on same page

// var showCorrectAnswerBtn = document.querySelector("#correct-answer-btn");
// var nextQuestionBtn = document.querySelector("#next-question-btn");
// var playTriviaBtn = document.querySelector("#play-btn");

// showCorrectAnswerBtn.addEventListener("click", function () {
//   console.log("correct answer button is working!");
//   //need to get data out of fetch requests to complete this function
//   //add render function for that data here as well
// });
// nextQuestionBtn.addEventListener("click", function () {
//   console.log("next question button is working!");
//   //need to get data out of fetch requests to complete this function
//   //add render function for that data here as well
// });
// playTriviaBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("play button is working!");
//   //need to get data out of fetch requests to complete this function
//   //add render function for that data here as well
// });

// var brewSearchBtn = document.querySelector("#search-button");

// brewSearchBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   var brewSearchValue = document.getElementById("search-bar").value;
//   console.log(brewSearchValue);
// });
