
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  nav.classList.toggle('show');
});


let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}


function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}


document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);


setInterval(nextSlide, 5000);
