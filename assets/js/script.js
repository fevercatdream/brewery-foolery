// search
var dropdownChoiceCityStateZipcode = document.querySelector("#dropdown-choice");
var searchBarInput = document.querySelector("#search-bar");
var searchButton = document.querySelector("#search-button");
var contentContainerSearchResults = document.querySelector(
  "#content-container-search-results"
);
var contentContainerNoSearchResults = document.querySelector(
  "#content-container-no-results"
);

// array of state name object
var stateTerritoryNameArr = [
  {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    AS: "American Samoa",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District of Columbia",
    FL: "Florida",
    GA: "Georgia",
    GU: "Guam",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    MP: "Northern Mariana Islands",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    PR: "Puerto Rico",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    TT: "Trust Territories",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    VI: "Virgin Islands",
    WA: "Washington",
    WV: "West Virginia",
    WI: "	Wisconsin",
    WY: "Wyoming",
  },
];

// current search page
var currentSearchPage = 1;
// how many search results to show per page
var searchResultsPerPage = 9;

// get all elements with class = card
var cardEls = document.querySelectorAll(".card");

// modal
var modalEl = document.querySelector(".modal");
var modalTitleId = document.querySelector("#modal-title-id");
var modalCloseBtn = document.querySelector("#modal-close");
var modalTypeOfBrewery = document.querySelector("#modal-type-of-brewery");
var modalBreweryWebsiteLink = document.querySelector(
  "#modal-brewery-website-link"
);
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

// On page load the search results and no search results are hidden
contentContainerSearchResults.classList.add("hidden");
contentContainerNoSearchResults.classList.add("hidden");

// function to fetch brewery data
function fetchSearchResults() {
  // search type is state || city || postal
  var searchType = dropdownChoiceCityStateZipcode.value;
  // user search input is the input state, city, or zipcode - example: WA || Seattle || 98101
  var userSearchInput = searchBarInput.value;

  // the created url
  var searchRequestUrl = `https://api.openbrewerydb.org/v1/breweries?by_${searchType}=${userSearchInput}&page=${currentSearchPage}&per_page=${searchResultsPerPage}`;
  console.log("URL: ", searchRequestUrl);

  // data fetch request
  fetch(searchRequestUrl).then(function (response) {
    if (response.status >= 200 && response.status < 300) {
      response.json().then(function (data) {
        console.log("data", data);

        if (data.length === 0) {
          contentContainerNoSearchResults.classList.remove("hidden");
          contentContainerSearchResults.classList.add("hidden");
        } else {
          contentContainerNoSearchResults.classList.add("hidden");
          contentContainerSearchResults.classList.remove("hidden");
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
        }
      });
    }
  });
}

// ------------------event listeners--------------------
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  contentContainerSearchResults.innerHTML = "";
  fetchSearchResults();
});

navNextPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  contentContainerSearchResults.innerHTML = "";
  currentSearchPage++;
  fetchSearchResults();
});

navPreviousPageBtn.addEventListener("click", function (event) {
  event.preventDefault();
  contentContainerSearchResults.innerHTML = "";
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
