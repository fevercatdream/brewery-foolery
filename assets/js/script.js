// search container
var searchButton = document.querySelector("#search-button");

// get all elements with class = card
var cardEls = document.querySelectorAll(".card");

// card 1 search result
var searchResult1 = document.querySelector("#search-result-1");
var breweryName1 = document.querySelector("#brewery-name-1");
var breweryAddress1 = document.querySelector("#brewery-address-1");
var searchDate1 = document.querySelector("#search-date-1");

// card 2 search result
var searchResult2 = document.querySelector("#search-result-2");
var breweryName2 = document.querySelector("#brewery-name-2");
var breweryAddress2 = document.querySelector("#brewery-address-2");
var searchDate2 = document.querySelector("#search-date-2");

// card 3 search result
var searchResult3 = document.querySelector("#search-result-3");
var breweryName3 = document.querySelector("#brewery-name-3");
var breweryAddress3 = document.querySelector("#brewery-address-3");
var searchDate3 = document.querySelector("#search-date-3");

// card 4 search result
var searchResult4 = document.querySelector("#search-result-4");
var breweryName4 = document.querySelector("#brewery-name-4");
var breweryAddress4 = document.querySelector("#brewery-address-4");
var searchDate4 = document.querySelector("#search-date-4");

// card 5 search result
var searchResult5 = document.querySelector("#search-result-5");
var breweryName5 = document.querySelector("#brewery-name-5");
var breweryAddress5 = document.querySelector("#brewery-address-5");
var searchDate5 = document.querySelector("#search-date-5");

// card 6 search result
var searchResult6 = document.querySelector("#search-result-6");
var breweryName6 = document.querySelector("#brewery-name-6");
var breweryAddress6 = document.querySelector("#brewery-address-6");
var searchDate6 = document.querySelector("#search-date-6");

// card 7 search result
var searchResult7 = document.querySelector("#search-result-7");
var breweryName7 = document.querySelector("#brewery-name-7");
var breweryAddress7 = document.querySelector("#brewery-address-7");
var searchDate7 = document.querySelector("#search-date-7");

// card 8 search result
var searchResult8 = document.querySelector("#search-result-8");
var breweryName8 = document.querySelector("#brewery-name-8");
var breweryAddress8 = document.querySelector("#brewery-address-8");
var searchDate8 = document.querySelector("#search-date-8");

// card 9 search result
var searchResult9 = document.querySelector("#search-result-9");
var breweryName9 = document.querySelector("#brewery-name-9");
var breweryAddress9 = document.querySelector("#brewery-address-9");
var searchDate9 = document.querySelector("#search-date-9");

// modal
var modalEl = document.querySelector(".modal");
var modalTitleId = document.querySelector("#modal-title-id");
var modalCloseBtn = document.querySelector("#modal-close");
var modalTypeOfBrewery = document.querySelector("#modal-type-of-brewery");
var modalBreweryWebsiteLink = document.querySelector("#modal-brewery-website-link");
var modalBreweryAddress = document.querySelector("#modal-brewery-address");
var modalPhoneNumber = document.querySelector("#modal-phone-number");
var modalMap = document.querySelector("#modal-map");
var modalFootId = document.querySelector("#modal-foot-id");
var modalPrevBtn = document.querySelector("#modal-prev-btn");
var modalNextBtn = document.querySelector("#modal-next-btn");

for (var i = 0; i < cardEls.length; i++) {
  var cardEl = cardEls[i];
  cardEl.addEventListener("click", openModal);
}

modalCloseBtn.addEventListener("click", closeModal);

function openModal() {
  modalEl.classList.add("is-active");
}

function closeModal() {
  modalEl.classList.remove("is-active");
}

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

// ------------------event listeners--------------------
//commented out cause they throw errors without ID's being on same page

var brewSearchBtn = document.querySelector("#search-button");

brewSearchBtn.addEventListener("click", function (event) {
  event.preventDefault();
  var brewSearchValue = document.getElementById("search-bar").value;
  console.log(brewSearchValue);
});

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
//
//
//
//
//
