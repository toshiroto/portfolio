import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.devicon').length;

for (let i = 0; i < numberOfIcons; i++) {
  const magnifyIcon = document.querySelectorAll('.devicon')[i];
  magnifyIcon.addEventListener('mouseenter', function () {
    this.style.width = '100px';
  });
  magnifyIcon.addEventListener('transitionend', function () {
    this.style.width = '80px';
  });

  document.querySelectorAll('.devicon')[i].addEventListener('mouseleave', function () {
    this.style.width = '80px';
  });
}
