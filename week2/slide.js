const slides = document.querySelectorAll('#review_container li');

let currentSlide = 0;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;

  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.order = '1';
    } else if (index === (currentSlide + 1) % slides.length) {
      slide.style.order = '2';
    } else {
      slide.style.order = '3';
    }
  });
}

setInterval(nextSlide, 5000);
