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

//function for querying brewery API
//      needs to fetch from 3 different criteria
//      fetch function for state
//      fetch function for city
//      fetch function for zip code
function triviaFetch() {
  fetch("https://api.openbrewerydb.org/v1/breweries?per_page=10")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      return data;
    });
}

// function

//define variables for each element being modified
//
//
//
//
//
//
//
//function for rendering the search criteria
// needs to get out of array
// create and append a card for each search result based on an index and where values are in that array
//      name
//      physical address
//
//
//function for iterating each search result and rendering it to page
//      create for loop for getting each object out of the array
//      modify element in card header/body
//      add event handler for prompting modal
//      needs to sort the results somehow
//
// render on modal other info
//      city
//      state
//      website url
//      phone number
//      type of brewery

//function for modifying modal text and rendering it
//      needs to access fetched array
//      needs to index that array for correct info
//      needs to modify elements in modal to display text of selected values
//      ****bonus - have an event listener on a button that targets the next       brewery modal
//
//function for fetching trivia questions
//      fetches trivia questions based on user input from selector drop menu
//      stores the questions in variable
//      fetches answers (all answers, concat the incorrect and correct answers together)
//      stores that new array in variable
//      fetch correct answer in it's own variable
//
//function for rendering the question/answers to page
//      grab the variables from trivia fetch function
//      add event handler on 2 buttons: one button renders question and concatted answer array
//      other button renders correct answer below it and adds a subtle animation to click first button to generate new question
//
//
//
//
//
//
//
//
//

//
