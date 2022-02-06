import 'bootstrap';

let numberOfIcons = document.querySelectorAll('.navigation-button').length;


for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.navigation-button')[i].addEventListener("click", function () {
    alert('I got clicked')
  })
};
