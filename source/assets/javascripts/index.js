import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.devicon').length;

for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.devicon')[i].addEventListener('mouseover', function (e) {
    if (this !== e.target) {
      this.style.width = '80px';
    } else {
      this.style.width = '100px';
    }
  });
}
