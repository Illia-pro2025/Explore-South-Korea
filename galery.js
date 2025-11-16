const slides = document.querySelectorAll('.bibliothek__item--gallery active');
let slideIndex = 0;
slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (index + 1) % slides.length;
    slides[slideIndex].classList.add('active');
    console.log('-');
  });
});
