const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Initial setup
showSlide(currentSlide);
setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
