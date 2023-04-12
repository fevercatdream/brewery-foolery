// search
var dropdownChoiceCityStateZipcode = document.querySelector("#dropdown-choice");
var searchBarInput = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var contentContainerSearchResults = document.querySelector("#content-container-search-results");
var contentContainerNoSearchResults = document.querySelector("#content-container-no-results");
  // current search page
  var currentSearchPage = 1;
  // how many search results to show per page
  var searchResultsPerPage = 9;

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

// Previous and Next Page buttons on search
var navPreviousPageBtn = document.querySelector("#pagination-previous-id");
var navNextPageBtn = document.querySelector("#pagination-next-id");

// open modal
for (var i = 0; i < cardEls.length; i++) {
  var cardEl = cardEls[i];
  cardEl.addEventListener("click", openModal);
}
// close modal
modalCloseBtn.addEventListener("click", closeModal);
// add class is-active to show modal
function openModal() {
  modalEl.classList.add("is-active");
}
// remove class is-active to hide modal
function closeModal() {
  modalEl.classList.remove("is-active");
}

// function to fetch brewery data
function fetchSearchResults(){

  // search type is state || city || postal
  var searchType = dropdownChoiceCityStateZipcode.value;
  // user search input is the input state, city, or zipcode - example: WA || Seattle || 98101
  var userSearchInput = searchBarInput.value;

  // the created url
  var searchRequestUrl = `https://api.openbrewerydb.org/v1/breweries?by_${searchType}=${userSearchInput}&page=${currentSearchPage}&per_page=${searchResultsPerPage}`
  console.log("URL: ", searchRequestUrl);

  // data fetch request
  fetch(searchRequestUrl)
    .then(function(response){
      if(response.status >= 200 && response.status < 300){
        response.json().then(function(data){
          console.log("data", data);

          for (let i = 0; i < data.length; i++) {
            console.log(data[i].name);
            console.log(data[i].state);
            console.log(data[i].address_1);
            console.log(data[i].phone);
            console.log(data[i].city);
            console.log(data[i].brewery_type);
            console.log(data[i].website_url);
            
            var breweryCard = document.createElement("div");
            breweryCard.classList.add("card");
            breweryCard.setAttribute("id", "content-container");
            contentContainerSearchResults.appendChild(breweryCard);
            
            var breweryCardHeader = document.createElement("header");
            breweryCardHeader.classList.add("card-header");
            breweryCard.appendChild(breweryCardHeader);
            
            var brewName = document.createElement("p");
            brewName.classList.add("card-header-title");
            brewName.innerHTML = data[i].name;
            breweryCardHeader.appendChild(brewName);
            
            var modalButton = document.createElement("button");
            modalButton.classList.add("card-header-icon");
            breweryCardHeader.appendChild(modalButton);
            
            var CardContentDiv = document.createElement("div");
            CardContentDiv.classList.add("content");
            breweryCard.setAttribute("id", "search-container-id");
            breweryCard.appendChild(CardContentDiv);
            
            var CardContentStreet = document.createElement("p");
            CardContentStreet.classList.add("content");
            CardContentStreet.innerHTML = data[i].address_1;
            breweryCard.appendChild(CardContentStreet);
            
            var CardContentCity = document.createElement("p");
            CardContentCity.classList.add("content");
            CardContentCity.innerHTML = data[i].city;
            breweryCard.appendChild(CardContentCity);
            
            var CardContentZipcode = document.createElement("p");
            CardContentZipcode.classList.add("content");
            CardContentZipcode.innerHTML = data[i].postal_code;
            breweryCard.appendChild(CardContentZipcode);
            
            var CardContentState = document.createElement("p");
            CardContentState.classList.add("content");
            CardContentState.innerHTML = data[i].state;
            breweryCard.appendChild(CardContentState);
          }
        })
      }
    })
}

// ------------------event listeners--------------------
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentContainerSearchResults.innerHTML = "";
  contentContainerNoSearchResults.innerHTML = "";
  fetchSearchResults();
});

navNextPageBtn.addEventListener("click", function(event){
  event.preventDefault();
  contentContainerSearchResults.innerHTML = "";
  contentContainerNoSearchResults.innerHTML = "";
  currentSearchPage++;
  fetchSearchResults();
});

navPreviousPageBtn.addEventListener("click", function(event){
  event.preventDefault();
  contentContainerSearchResults.innerHTML = "";
  contentContainerNoSearchResults.innerHTML = "";
  currentSearchPage--;
  fetchSearchResults();
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
