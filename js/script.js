var searchButton = document.querySelector(".legend-button");
var modalSearch = document.querySelector(".modal-search");
var dateArrival = document.querySelector(".date-arrival-item");
var dateDeparture = document.querySelector(".date-departure-item");
var searchForm = document.querySelector(".index-form");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSearch.classList.add("modal-close");
  modalSearch.classList.remove("modal-error");
});

searchForm.addEventListener("submit", function (evt) {
    if (!dateArrival.value || !dateDeparture.value) {
    evt.preventDefault();
    modalSearch.classList.add("modal-error");
    } 
});
