import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.devicon').length;

for (let i = 0; i < numberOfIcons; i++) {
  document.querySelectorAll('.devicon')[i].addEventListener('mouseenter', function() {
    if () {
      this.style.width = '100px';
    } else {
      this.style.width = '80px';
    }
  });
}
