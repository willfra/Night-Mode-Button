
var button = document.querySelector(".night-mode-button");
button.addEventListener("click", function() {
    document.querySelector("body").classList.toggle("dark-theme");
    document.querySelector(".night-mode-button").classList.toggle("button-ative");
});