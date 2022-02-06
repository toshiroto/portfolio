import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.navigation-button').length;

for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.navigation-button')[i].addEventListener('mouseover', function () {
    this.style.width = '100px';
  });
}
