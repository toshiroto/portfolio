import 'bootstrap';

const numberOfIcons = document.querySelectorAll('.devicon').length;

function big(e) {
  if (this === e.target) {
    this.style.width = '100px';
  }
}

for (let i = 0; i < numberOfIcons; i++) {
  const icon = document.querySelectorAll('.devicon')[i];

  icon.addEventListener('mouseover', big);
}
