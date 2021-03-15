const searchBtn = document.querySelector(".button-search-hotel");
const searchPopup = document.querySelector(".search-popup");

searchBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchPopup.classList.toggle("search-popup-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains("search-popup-show")) {
      evt.preventDefault();
      searchPopup.classList.remove("search-popup-show");
    }
  }
});
