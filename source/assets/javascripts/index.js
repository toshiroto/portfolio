import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.navigation-button').length;

for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.navigation-button')[i].addEventListener('onmouseover', function(event) {
    event.style.width = '100px';});
}
