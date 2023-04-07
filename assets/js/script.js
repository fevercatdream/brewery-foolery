var modalEl = document.querySelector(".modal");
var modalCloseBtn = document.querySelector("#modal-close");
var cardEls = document.querySelectorAll(".card");

for (var i = 0; i < cardEls.length; i++) {
    var cardEl = cardEls[i];
    cardEl.addEventListener("click", openModal);   
}

modalCloseBtn.addEventListener("click", closeModal);

function openModal(){
    modalEl.classList.add("is-active");
}

function closeModal(){
    modalEl.classList.remove("is-active");
}