import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.devicon').length;

for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.devicon')[i].addEventListener('mousemove', function () {
    this.style.width = '100px';
  });
}
