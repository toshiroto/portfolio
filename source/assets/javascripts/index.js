import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.img').length;

for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.img')[i].addEventListener('onmouseover', function () {
    this.style.width = '100px';
  });
}
